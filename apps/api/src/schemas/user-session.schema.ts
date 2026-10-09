import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserSessionDocument = HydratedDocument<UserSession>;

@Schema({ timestamps: true })
export class UserSession {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user!: Types.ObjectId;

    @Prop({ enum: ['socket', 'auth'], default: 'socket' })
    kind!: 'socket' | 'auth';

    @Prop({ default: '', maxlength: 20 })
    role!: string;

    @Prop({ default: '', maxlength: 40 })
    portal!: string;

    @Prop({ default: '', maxlength: 80 })
    ip!: string;

    @Prop({ default: '', maxlength: 500 })
    userAgent!: string;

    @Prop({ required: true, default: Date.now })
    startTime!: Date;

    @Prop()
    endTime?: Date;

    @Prop({ default: 0 })
    duration!: number;
}

export const UserSessionSchema = SchemaFactory.createForClass(UserSession);
UserSessionSchema.index({ user: 1, endTime: 1, kind: 1 });
UserSessionSchema.index({ user: 1, kind: 1, startTime: -1 });
