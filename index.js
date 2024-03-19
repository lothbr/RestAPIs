import  express from "express";
import bodyParser from "body-parser";
import usersRoute from "./Routes/users.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',usersRoute)

app.get('/', (req, res)=> res.send("Welcome to my HomePage"));

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));