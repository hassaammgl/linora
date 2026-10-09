import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlatformSettingsDocument = HydratedDocument<PlatformSettings>;

@Schema({ timestamps: true })
export class PlatformSettings {
    @Prop({ unique: true, default: 'platform' })
    key!: string;

    @Prop({
        type: {
            appName: { type: String, default: 'Chatty' },
            logo: {
                public_id: { type: String, default: '' },
                url: { type: String, default: '' },
            },
            primaryColor: { type: String, default: '#6366f1' },
        },
        default: () => ({
            appName: 'Chatty',
            logo: { public_id: '', url: '' },
            primaryColor: '#6366f1',
        }),
    })
    branding!: {
        appName: string;
        logo: { public_id: string; url: string };
        primaryColor: string;
    };

    @Prop({
        type: {
            enabled: { type: Boolean, default: true },
        },
        default: () => ({ enabled: true }),
    })
    registration!: { enabled: boolean };

    @Prop({
        type: {
            emailEnabled: { type: Boolean, default: true },
            pushEnabled: { type: Boolean, default: true },
        },
        default: () => ({ emailEnabled: true, pushEnabled: true }),
    })
    notifications!: { emailEnabled: boolean; pushEnabled: boolean };
}

export const PlatformSettingsSchema =
    SchemaFactory.createForClass(PlatformSettings);
