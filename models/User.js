import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true, // Bu da önemli
        },
        phoneNumber: {
            type: String,
        },
        address: {
            type: String,
        },
        job: {
            type: String,
        },
        bio: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        // confirmPassword alanını kaldırdık!
        emailVerified: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);