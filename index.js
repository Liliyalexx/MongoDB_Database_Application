import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import tweetRouter from './routes/tweets.js'

dotenv.config()
mongoose.connect(process.env.ATLAS_URI)

const app = express()
const PORT = process.env.PORT || 4001

app.use(express.json())
app.use('/tweets', tweetRouter)


app.get('/', (req, res) =>{
    res.send("well ")
}
)
app.listen(PORT, () => console.log(`Server running: ${PORT}`))