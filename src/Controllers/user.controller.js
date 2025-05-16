import ServiceUser from "../Services/users.services.js";

async function Register(req, res) {

    const { name, email, password } = req.body;
    
    const user = await ServiceUser.Register(name, email, password);

    res.status(201).json(user);
}

async function Login(req, res) {

    const { email, password } = req.body;

    const user = await ServiceUser.Login(email, password);

    if (user.length == 0)
        res.status(401).json({ error: "E-mail ou senha inválida" });
    else
        res.status(200).json(user);
}

async function Profile(req, res) {

    const id_user = req.id_user;
    const user = await ServiceUser.Profile(id_user);

    res.status(200).json(user);
}

export default { Register, Login, Profile }