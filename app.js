const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const reqTime = new Date()

  res.on('finish', () => {
    const resTime = new Date()
    const reqMsg = logMsg(reqTime)
    const resMsg = logMsg(resTime)
    console.log(reqMsg)
    console.log(`${resMsg} | total time:  ${resTime - reqTime}ms`)

    function logMsg (time) {
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}  |  ${req.method} from ${req.path}`
    }
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
