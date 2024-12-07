import express from "express"
import Router from './routes/route'


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/',Router)


const port = process.env.PORT || 8080;


app.listen(port ,() =>{
    console.log(`Server is listening local host : ${port}`)
})