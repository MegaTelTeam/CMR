import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
        email: { type: String, required: true },
        hashedPassword: { type: String, required: true },
        username: { type: String, required: true },
        
    }, { timestamps: true }
);


export default models.users ||  model("users", userSchema)