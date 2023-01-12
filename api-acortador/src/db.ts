import 'dotenv/config'

import mongoose from 'mongoose'

const mongo = process.env.MONGO_DB as string

const connectionMongo = mongoose.connect(mongo)

export default connectionMongo