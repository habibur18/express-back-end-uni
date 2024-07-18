import mongoose, { Schema } from 'mongoose'
import {
  Guardian,
  IStudent,
  LocalGuardian,
  UserName,
} from './student.interface'

const userNameSchema = new Schema<UserName>(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { _id: false },
)
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: false,
  },
  fatherContactNo: {
    type: String,
    required: false,
  },
  motherName: {
    type: String,
    required: false,
  },
  motherOccupation: {
    type: String,
    required: false,
  },
  motherContactNo: {
    type: String,
    required: false,
  },
})
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: false,
  },
  occupation: {
    type: String,
    required: false,
  },
  contactNo: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
})
const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: true,
    // unique: true,
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactName: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
})

// create a model
export const StudentModel = mongoose.model<IStudent>('Student', studentSchema)
