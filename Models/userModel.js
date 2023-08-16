import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 60
        },
        email: {
            type: String,
            unique: true,
            required: true,
            maxlength: 200
        },
        phoneNumber: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
module.exports = User