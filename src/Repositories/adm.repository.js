import pool from "../DataBase/postgres.db.js"


async function RegisterAdmin(name, email, password) {
    async function verfiyEmail() {
        try {
            const query = 'SELECT count(*) FROM users WHERE email = $1';
            const result = await pool.query(query, [email]);
            //Testede github

            return result.rows[0].count > 0; // Retorna true se o email já existe
        } catch (error) {
            console.error('Erro ao verificar email:', error);
            return false;
        }
    }
    const resultEmail = await verfiyEmail(email);
    if (resultEmail) {
        console.log("Email já cadastrado!");
    } else {
        let sql = `insert into admins(name, email, password) values($1, $2, $3)
     returning id_admin`;

        const admin = await pool.query(sql, [name, email, password]);

        return admin.rows[0];
    }
}



async function ListarByEmailAdmin(email) {
    let sql = `select * from admins where email = $1`;
    try {
        const admin = await pool.query(sql, [email]);

        if (admin.length == 0)
            return [];
        else
            return admin.rows[0];
    } catch (err) {
        console.log(err);
    }
}

async function ProfileAdmin(id_admin) {

    let sql = `select id_user, name, email from users where id_user = $1`;

    const admin = await pool.query(sql, [id_admin]);

    return admin.rows[0];
}

export default {RegisterAdmin, ListarByEmailAdmin, ProfileAdmin}
