import mongoose from 'mongoose'
import config from './config'

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, NODE_ENV } = config as any
const dbURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

const options: mongoose.ConnectOptions = {
  autoIndex: false
}

if(DB_USER && DB_PASSWORD) {
  options.user = DB_USER
  options.pass = DB_PASSWORD
}

async function connectDB(): Promise<mongoose.Connection> {
  try {
    mongoose.set('debug', (NODE_ENV === 'development'))

    await mongoose.connect(dbURL, options)
    console.log('Connected to MongoDB on ' + dbURL)

    mongoose.Promise = global.Promise 
    const db: mongoose.Connection = mongoose.connection    
    return db
  } catch (error) {
    console.error('MongoDB Connection Error: ', error)
    process.exit(1)
  }
}

export default connectDB