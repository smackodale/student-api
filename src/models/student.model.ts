import { model, Schema } from 'mongoose';

export interface IStudent {
  studentIdentifier: String,
  familyName: String,
  givenNames: String,
  gender: String,
  yearLevel: Number,
  rollClass: String,
  house: String,
  indigenous: Boolean;
  disabilities: Boolean;
  attendance: Number,
  image: String,
  results: [{
    subject: String,
    achievement: String,
    previousAchievement: String
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
  indigenous: Boolean,
  disabilities: Boolean,
  attendance: Number,
  image: String,
  results: [{
    subject: String,
    achievement: String,
    previousAchievement: String
  }]
});

export const Student = model('Student', StudentSchema);