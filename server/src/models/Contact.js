import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },

    phone: {
        type: String,
        required: true,
        trim: true,
    },

    companyName: {
        type: String,
        trim: true,
    },

    projectTitle: {
        type: String,
        trim: true,
    },

    projectDetail: {
        type: String,
        trim: true,
    },
},
{
    timestamps: true,
}
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;