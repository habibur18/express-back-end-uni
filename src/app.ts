import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { StudentRoutes } from './app/student/student.route'
const app: Application = express()
const port = 3000

// parser
app.use(express.json())
app.use(cors())
let a = 'test'
a = 'test2'

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use('/api/v1/students', StudentRoutes)

export default app
