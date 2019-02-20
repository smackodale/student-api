import { Schema, model, SchemaTypeOpts } from 'mongoose';

export interface IStudent {
  studentIdentifier: String,
  familyName: String,
  givenNames: String,
  gender: String,
  yearLevel: Number,
  rollClass: String,
  house: String,
  attendance: Number,
  image: Buffer,
  results: [{
    subject: String,
    achievement: String
  }]
}

export const StudentSchema = new Schema({
  studentIdentifier: { type: String, index: true },
  familyName: String,
  givenNames: String,
  gender: String,
  yearLevel: Number,
  rollClass: String,
  house: String,
  attendance: Number,
  image: Buffer,
  results: [{
    subject: String,
    achievement: String
  }]
});

export const Student = model('Student', StudentSchema);