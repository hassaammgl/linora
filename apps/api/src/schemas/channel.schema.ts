import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ChannelDocument = HydratedDocument<Channel>;

@Schema({ timestamps: true })
export class Channel {
    @Prop({ required: true })
    name!: string;

    @Prop({
        unique: true,
        sparse: true,
        lowercase: true,
        trim: true,
    })
    slug?: string;

    @Prop({ required: true, unique: true })
    widgetId!: string;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    creator!: Types.ObjectId;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], default: [] })
    assignedAgents!: Types.ObjectId[];

    @Prop({ type: Types.ObjectId, ref: 'User', default: null })
    assignedAgent!: Types.ObjectId | null;

    @Prop({ default: '#6366f1' })
    color!: string;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
