import { model, Schema } from 'mongoose';

export interface IStudent {
  studentIdentifier: String,
  familyName: String,
  givenNames: String,
  gender: String,
  yearLevel: Number,
  rollClass: String,
  house: String,
  attendance: Number,
  image: String,
  results: [{
    subject: String,
    achievement: String
  }]
}

export const StudentSchema = new Schema({
  studentIdentifier: { type: String, index: true, unique: true },
  familyName: String,
  givenNames: String,
  gender: String,
  yearLevel: Number,
  rollClass: String,
  house: String,
  attendance: Number,
  image: String,
  results: [{
    subject: String,
    achievement: String
  }]
});

export const Student = model('Student', StudentSchema);