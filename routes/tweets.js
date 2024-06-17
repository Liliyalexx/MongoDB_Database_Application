import express from 'express'
import Tweet from '../models/Tweet.js'
import User from '../models/User.js';

const router= express();

    router.post('/', async(req, res) => {
        console.log(req.body);
        const {username, content} = req.body

        const dbUser = await User.find({username})

        if(dbUser){
            const tweet = await Tweet.create({
                content: content, 
                user: dbUser._id, 
                username: dbUser.username 
            })
            return res.json(tweet)

        } else {
            const newUser = await User.create({ username})
            const tweet = Tweet.create({
                // body: newTweet, 
                user: newUser._id, 
                content:content,
                username: newUser.username
            })
            return res.json(tweet)
        }

    })

    router.get('/', async(req, res) => {
        res.send(`Getting all tweets`)
    })

    router.delete('/', (req,res) => {
        res.send(`Deleteng Tweet`)
    })


    router.put('/', async (req,res) => {
        res.send(`Updating Tweet`)
    })
export default router;