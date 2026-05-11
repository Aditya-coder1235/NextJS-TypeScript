import mongoose from "mongoose";

type Task={
    title:string;
    description:string;
    completed:boolean;
    user:mongoose.Types.ObjectId
}

const taskSchema = new mongoose.Schema<Task>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Task = mongoose.models.Task || mongoose.model<Task>("Task", taskSchema);

export default Task;