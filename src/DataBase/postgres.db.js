import pg from 'pg'
const { Pool } = pg;
// Dados novo banco supabase
// qTBe8bXkmtVpEo2L password
//  URL https://kpcanhcozznqvfibklhd.supabase.co
// JWT xFW6e3bktVP5k4Lr+5BmqKyHdWjWyDugRBk4uFnhO8FaK6tffi4TZ9wuujMIEvlNGbTa0DB+IrQ8crJ0EW8vPA==
// ID kpcanhcozznqvfibklhd
// API key eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwY2FuaGNvenpucXZmaWJrbGhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MjQ5OTQsImV4cCI6MjA1MTQwMDk5NH0.684EaApGs1HDiRVK3G04SFSvZxbqGaN2orbdWq31D7E

const pool = new Pool({    
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    port: 6543,
    user: 'postgres.kfuglmenqxnbfjgtqnws',    
    database: 'postgres',    
    password: 'Estacio091@@',
    // pool_mode:"transaction",
});


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
