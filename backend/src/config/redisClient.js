import { createClient } from 'redis'
import dotenv from 'dotenv'
dotenv.config()

const redisClient = createClient({
  username: 'fernando-default',
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT)
  }
})

redisClient.on('error', err => console.error('Redis Client Error', err))
redisClient.on('connect', () => console.log('✅ Connected to Redis Cloud'))

await redisClient.connect()

export default redisClient
