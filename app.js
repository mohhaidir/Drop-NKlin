const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const routerUser = require('./routers/routerUser')
app.use('/', routerUser)

app.listen(port, () => {
  console.log(`PORT: ${port} <--------------> SUCCESSFULLY RUNNING!!`)
})