import bcrypt from "bcrypt";
import jwt from "../../token.js"

import repoAdmin from "../Repositories/adm.repository.js"

async function RegisterAdmin(name, email, password) {
    const hashPassword = await bcrypt.hash(password, 10);
    const admin = await repoAdmin.RegisterAdmin(name, email, hashPassword);

    admin.token = jwt.CreateToken(admin.id_admin);

    return admin;
}
async function LoginAdmin(email, password) {
 
    const admin = await repoAdmin.ListarByEmailAdmin(email);

    if (admin.length == 0)
        return [];
    else {
        if (await bcrypt.compare(password, admin.password)) {
            delete admin.password;

            admin.token = jwt.CreateToken(admin.id_admin);

            return admin;
        } else
            return [];
    }

    return admin;
}

 
async function ProfileAdmim(id_admin) {
 
    const admin = await repoAdmin.ProfileAdmin(id_admin);

    return admin;
}

export default { RegisterAdmin, LoginAdmin, ProfileAdmim }


