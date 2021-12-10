import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Post } from './post.schema';

export type AuthorDocument = Author & Document;

@Schema()
export class Author {
  @Prop()
  id: number;

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop()
  post: Post[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
