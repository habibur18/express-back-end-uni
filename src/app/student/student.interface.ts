export interface Guardian {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export interface UserName {
  firstName: string
  middleName?: string
  lastName: string
}
export interface LocalGuardian {
  name: string
  occupation: string
  contactNo: string
  address: string
}
export interface IStudent {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactName: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  profileImage?: string
  isActive: 'active' | 'inactive'
}
