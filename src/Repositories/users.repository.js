import pool from "../DataBase/postgres.db.js"

async function Register(name, email, password) {
    async function verfiyEmail() {
        try {
            const query = 'SELECT count(*) FROM users WHERE email = $1';
            const result = await pool.query(query, [email]);

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
        let sql = `insert into users(name, email, password) values($1, $2, $3)
      returning id_user`;

        const user = await pool.query(sql, [name, email, password]);
        return user.rows[0];

    }
}

// Listar usuário
async function ListarByEmail(email) {
    let sql = `select * from users where email = $1`;
    try {
        const user = await pool.query(sql, [email]);

        if (user.length == 0)
            return [];
        else
            return user.rows[0];
    } catch (err) {
        console.log(err);
    }
}

async function Profile(id_user) {

    let sql = `select id_user, name, email from users where id_user = $1`;

    const user = await pool.query(sql, [id_user]);

    return user.rows[0];
}

export default {Register, ListarByEmail, Profile  }