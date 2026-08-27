import mongoose from 'mongoose';
const adminSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true }
}, { timestamps: true, versionKey: false });
export const Admin = mongoose.model('Admin', adminSchema);
