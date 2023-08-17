// # to make it private , inside class we have methods (walk etc.)
const {express, routes}= require ('./controller')
const path =require('path')
const app = express()
const port = +process.eventNames.PORT||3000

// Static 
app.use(express.static('./static'))
app.use(
    express.urlencoded({
        extended:false
    }),
    routes
)
routes.get('^/$|/challenger', (req, res)=>{
    res.sendFile(path.resolve(__dirname,
        "../API/static/html/index.html"))
}) 

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})