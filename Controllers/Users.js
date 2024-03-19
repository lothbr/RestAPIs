import {v4 as uuidv4} from "uuid"

const users = []

export const CreateUser = (req, res) => {
    var Userslen = users.length; 
    var newuser = req.body
    // add id to  user
    users.push({ id:uuidv4(), ...newuser, });
    if(users.length > Userslen){
        res.send(`Successfully Added new users ${newuser.firstname}`)
    }else {
        res.send(`Update failed`)
    }
    
}

export const GetUsers= (req, res) => {
    
    res.send(users);
}

export const GetUser= (req, res) => {
    const {id} = req.params;
    var getuser = users.find((user)=> user.id == id);
    if(getuser != null){
        res.send(getuser)
    }else{
        res.send(`Invalid User`)
    }
}

export const DeleteUser = (req, res) =>{
    const {id} = req.params;
    var getuser = users.find((user) => user.id == id)
    if(getuser != null){
        users.filter((user)=> user.id !== getuser.id)
        res.send(`Successfully removed User ${getuser.firstname}`)
    }else{
        res.send(`Invalid User`)
    }
}

export const UpdateUser = (req, res) => {
    const{id}= req.params;
    const{firstname, lastname, age} = req.body;
    var getuser = users.find((user) => user.id === id)
    if(getuser.firstnamex !== null){
        if(firstname)getuser.firstname = firstname
        if(lastname)getuser.lastname = lastname
        if(age)getuser.age = age
        res.send(`Successfully Updated User ${getuser.firstname}`)
    }else{
        res.send(`Invalid User`)
    }
    
}