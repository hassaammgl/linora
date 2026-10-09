import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { hash } from 'bcryptjs';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    name!: string;

    @Prop({ default: '' })
    bio!: string;

    @Prop({ required: true, unique: true })
    username!: string;

    @Prop({ required: true, unique: true })
    email!: string;

    @Prop({ select: false })
    password?: string;

    @Prop({
        enum: ['user', 'admin', 'agent', 'manager', 'client'],
        default: 'user',
    })
    role!: 'user' | 'admin' | 'agent' | 'manager' | 'client';

    @Prop({ type: Types.ObjectId, ref: 'Channel', default: null })
    channel!: Types.ObjectId | null;

    @Prop({ default: false })
    isGuest!: boolean;

    @Prop({
        type: { public_id: String, url: String, name: String },
        required: true,
    })
    avatar!: { public_id: string; url: string; name: string };

    @Prop({ default: false })
    isVerified!: boolean;

    @Prop({ default: false })
    mustChangePassword!: boolean;

    /** When true, channel announcements skip this customer. */
    @Prop({ default: false })
    excludeFromAnnouncements!: boolean;

    @Prop({
        type: [
            {
                token: { type: String, required: true },
                portal: {
                    type: String,
                    enum: ['agent', 'customer'],
                    default: 'customer',
                },
                updatedAt: { type: Date, default: Date.now },
            },
        ],
        select: false,
        default: [],
    })
    fcmTokens!: {
        token: string;
        portal: 'agent' | 'customer';
        updatedAt: Date;
    }[];

    @Prop({ select: false })
    otp?: string;

    @Prop({ select: false })
    otpExpiry?: Date;

    @Prop({ select: false })
    resetPasswordOtp?: string;

    @Prop({ select: false })
    resetPasswordOtpExpiry?: Date;

    @Prop({ select: false })
    refreshToken?: string;

    @Prop({ default: false })
    isSuperAdmin!: boolean;

    @Prop({ default: false })
    isManager!: boolean;

    @Prop({ type: [String], default: [] })
    adminPermissions!: string[];

    @Prop({
        type: [
            {
                tag: { type: Types.ObjectId, ref: 'Tag', required: true },
                assignedBy: { type: Types.ObjectId, ref: 'User', required: true },
                assignedAt: { type: Date, default: Date.now },
            },
        ],
        default: [],
    })
    customerTags!: {
        tag: Types.ObjectId;
        assignedBy: Types.ObjectId;
        assignedAt: Date;
    }[];

    @Prop({
        type: { email: Boolean, phone: Boolean, facebook: Boolean },
        default: () => ({ email: false, phone: false, facebook: false }),
    })
    customerVerification!: { email: boolean; phone: boolean; facebook: boolean };

    @Prop({
        type: {
            contactEmail: { type: String, default: '' },
            phoneNumber: { type: String, default: '' },
            facebookUsername: { type: String, default: '' },
            facebookUrl: { type: String, default: '' },
        },
        default: () => ({
            contactEmail: '',
            phoneNumber: '',
            facebookUsername: '',
            facebookUrl: '',
        }),
    })
    customerAgentDetails!: {
        contactEmail: string;
        phoneNumber: string;
        facebookUsername: string;
        facebookUrl: string;
    };

    createdAt?: Date;
    updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function () {
    if (!this.isModified('password') || !this.password) return;
    this.password = await hash(this.password, 10);
});