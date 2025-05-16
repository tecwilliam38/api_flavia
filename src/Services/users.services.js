import bcrypt from "bcrypt";
import jwt from "../../token.js"
import repoUser from "../Repositories/users.repository.js"

async function Register(name, email, password) {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repoUser.Register(name, email, hashPassword);

    user.token = jwt.CreateToken(user.id_user);

    return user;
}

async function Login(email, password) {
 
    const user = await repoUser.ListarByEmail(email);

    if (user.length == 0)
        return [];
    else {
        if (await bcrypt.compare(password, user.password)) {
            delete user.password;

            user.token = jwt.CreateToken(user.id_user);

            return user;
        } else
            return [];
    }

    return user;
}

 
async function Profile(id_user) {
 
    const user = await repoUser.Profile(id_user);

    return user;
}

export default {Login, Register, Profile}


