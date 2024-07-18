import { Request, Response } from 'express'
import { IStudent } from './student.interface'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData }: { student: IStudent } = req.body
    const result = await StudentServices.createStudentIntoDB(studentData)
    res.status(200).json({
      status: true,
      message: 'create student successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      status: true,
      message: 'All students retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getSingleStudentFromDB(req.params.id)
    res.status(200).json({
      status: true,
      message: 'Single student retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
