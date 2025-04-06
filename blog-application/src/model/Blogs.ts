import mongoose, { Document, Model, Schema } from 'mongoose';

interface IBlog extends Document {
    title: string;
    body: string;
}

const blogSchema: Schema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true }
});

let Blog: Model<IBlog>;

if (!mongoose.models.Blog) {
    Blog = mongoose.model<IBlog>('Blog', blogSchema);
} else {
    Blog = mongoose.models.Blog as Model<IBlog>;
}

export default Blog;