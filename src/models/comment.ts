import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IComment {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const commentSchema = new Schema<IComment>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// 3. Create a Model.
// const Comment = model<IComment>('Comment', commentSchema);

export default model<IComment>('Comment', commentSchema);