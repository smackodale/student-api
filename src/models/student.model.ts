import { Schema, model } from 'mongoose';

export const StudentSchema = new Schema({
  studentIdentifier: String,
  familyName: String,
  givenNames: String,
  gender: String,
  yearLevel: Number,
  rollClass: String,
  house: String,
  attendance: Number,
  imageUrl: String,
  results: [{
    subject: String,
    achievement: String
  }]
});

export const Student = model('Student', StudentSchema);