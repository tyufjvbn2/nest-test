import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DogDocument = Dog & Document;

@Schema()
export class Dog {
  @Prop()
  _id: string;

  @Prop()
  id: number | undefined;

  @Prop()
  title: string;

  @Prop()
  description?: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
