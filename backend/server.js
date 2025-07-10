import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

let submittedData = null  // store the form data

app.get('/', (req, res) => {
    if (submittedData) {
        res.send(`
            <h1>Form Submitted</h1>
            <p><strong>Username:</strong> ${submittedData.username}</p>
            <p><strong>Password:</strong> ${submittedData.password}</p>
        `)
    } else {
        res.send('Hello World!')
    }
})

app.post('/', (req, res) => {
    submittedData = req.body
    console.log(req.body)
    res.redirect('/')  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})