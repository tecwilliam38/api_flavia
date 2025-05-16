import ServiceAdmin from "../Services/admin.service"

async function RegisterAdmin(req, res){
    const {name, email, password} = req.body;
    const admin = await ServiceAdmin.RegisterAdmin(name, email, password)

    res.status(200).json(admin);
}
async function LoginAdmin(req, res){
    const {email, password} = req.body;

    const admin = await ServiceAdmin.LoginAdmin(email,password)
    if (admin.length == 0)
        res.status(401).json({ error: "E-mail ou senha inválida" });
    else
        res.status(200).json(admin);
}
async function ProfileAdmin(req, res){
    const id_admin = req.id_admin;
    const admin = await ServiceAdmin.ProfileAdmim(id_admin);
    
    res.status(200).json(admin);
}

export default {RegisterAdmin, LoginAdmin, ProfileAdmin};