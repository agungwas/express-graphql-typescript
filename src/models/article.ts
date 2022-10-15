import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IArticle {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const articleSchema = new Schema<IArticle>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// 3. Create a Model.
// const Article = model<IArticle>('Article', articleSchema);

export default model<IArticle>('Article', articleSchema);