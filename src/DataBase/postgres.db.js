import pg from 'pg'
const { Pool } = pg;
// Dados novo banco supabase

const pool = new Pool({    
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    port: 6543,
    user: 'postgres.kfuglmenqxnbfjgtqnws',    
    database: 'postgres',    
    password: 'Estacio091@@',
});

// Teste de Conexção
  async function testConnection() {
       try {
         const client = await pool.connect();
         console.log("Conexão com o banco de dados estabelecida com sucesso!");
         client.release(); // Libera a conexão após o teste
       } catch (err) {
         console.error("Erro ao conectar ao banco de dados:", err);
       }
     }
 testConnection();

export default pool;
