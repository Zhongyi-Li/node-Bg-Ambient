const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())  //将客户端传过来的数据转为json格式
require('./routers/admin/index')(app)
require('./plugins/db')(app)

app.listen(3030, () => {
    console.log('Hello world');
})