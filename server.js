const http = require('http')
const server = http.createServer((req,res)=>{
    console.log('Nev connection')
    res.end('Hello Awesome -now with continous deployment')
})
const PORT = process.nextTick.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
