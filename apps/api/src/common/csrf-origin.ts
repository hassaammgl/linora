import type { NextFunction, Request, Response } from 'express';
import { originAllowed } from './cors-origin.js';

const SAFE = new Set(['GET', 'HEAD', 'OPTIONS']);

function statedOrigin(req: Request) {
    const origin = String(req.headers.origin || '').trim();
    if (origin) return origin;
    const referer = String(req.headers.referer || '').trim();
    if (!referer) return '';
    try {
        return new URL(referer).origin;
    } catch {
        return 'null';
    }
}

export function rejectCrossSiteWrite(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (SAFE.has(req.method)) return next();
    const origin = statedOrigin(req);
    if (!origin) return next();
    if (originAllowed(origin)) return next();
    return res
        .status(403)
        .json({ success: false, message: 'Cross-site request blocked' });
}

export function allowSocketOrigin(
    req: { headers?: { origin?: string } },
    callback: (err: string | null, ok: boolean) => void,
) {
    const origin = String(req.headers?.origin || '').trim();
    if (!origin) return callback(null, true);
    if (originAllowed(origin)) return callback(null, true);
    return callback('Cross-site socket blocked', false);
}
