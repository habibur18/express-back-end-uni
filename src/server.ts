import mongoose from 'mongoose'
import app from './app'
import config from './app/config'
const port = 5000 || process.env.PORT
// app.listen(port, async () => {
//   try {
//     await mongoose.connect(config.MONGO_URI as string);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.log(err);
//   }

//   console.log(`Example app listening on port ${port}`);
// });

async function main() {
  try {
    await mongoose.connect(config.MONGO_URI as string)

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

    console.log('MongoDB connected')
  } catch (err) {
    console.log(err)
  }
}

main()
