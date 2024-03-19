import express from "express"
import { CreateUser,GetUsers,GetUser,DeleteUser, UpdateUser } from "../Controllers/Users.js";


const router = express.Router();

router.get('/',GetUsers);

router.post('/' , CreateUser)

router.get('/:id', GetUser)

router.delete('/:id', DeleteUser)

router.patch('/:id', UpdateUser )
export default router;