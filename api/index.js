const {express, routes}= require ('./controller')
const path =require('path')
const cookieParser = require("cookie-parser");
const { errorHandling } = require("./middleware/ErrorHandling");
const cors = require('cors')
const app = express()
const port = +process.env.PORT || 3000


// Middleware - Application level
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});
app.use(
    express.static('./static'),
    express.urlencoded({
        extended:false
    }),
    // express.json(),
    cookieParser(),
    cors(),
    routes
)
routes.get('^/$|/challenger',(req, res)=>{
    res.sendFile(path.resolve(__dirname,
        "../api/static/html/index.html"))
}) 
// Handling all errors
app.use(errorHandling);
// Running a server
app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})
