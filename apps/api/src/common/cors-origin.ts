const DEFAULT_CORS = [
    'http://localhost:7100',
    'http://localhost:7101',
    'http://localhost:7102',
];

const LOCAL_PORTS = [7100, 7101, 7102, 7105, 7106, 7107, 7108];

function split(raw?: string) {
    return String(raw || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
}

function allowedHost(hostname: string) {
    const roots = split(process.env.CORS_HOSTS);
    const list = roots.length ? roots : ['chatwithus.info'];
    const host = hostname.toLowerCase();
    return list.some((root) => {
        const r = root.toLowerCase();
        return host === r || host.endsWith(`.${r}`);
    });
}

/** Same allowlist as Express CORS, including local panel ports. */
export function originAllowed(origin?: string) {
    if (!origin) return true;
    const exact = new Set(
        [
            ...DEFAULT_CORS,
            ...LOCAL_PORTS.flatMap((port) => [
                `http://localhost:${port}`,
                `http://127.0.0.1:${port}`,
            ]),
            ...split(process.env.CORS_ORIGINS),
            process.env.CLIENT_URL,
            process.env.CUSTOMER_URL,
            process.env.AGENT_URL,
            process.env.ADMIN_URL,
            process.env.PWA_URL,
        ].filter(Boolean) as string[],
    );
    if (exact.has(origin)) return true;
    try {
        const url = new URL(origin);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
        return allowedHost(url.hostname);
    } catch {
        return false;
    }
}
