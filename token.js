import jwt,{decode} from "jsonwebtoken"

// const secretKey = 'seu_segredo_jwt';
const secretToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZHNocGNncHp0bmljamRza3lpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzA4MDYyOSwiZXhwIjoyMDQ4NjU2NjI5fQ.c4WZmWCJQMtvKwuZNFTXVxR5WcMFu0igeLaNe4CTSK4";

function CreateToken(id_user) {
     const token = jwt.sign({ id_user }, secretToken, {
          expiresIn: 9999999
     });

     return token;
}

function ValidateToken(req, res, next) {         
     const authToken = req.headers['authorization'];    
     if (!authToken)
          return res.status(401).json({ error: "Token não informado" });
     const [bearer, token] = authToken.split(" ");  // "Bearer"   "000000000"
     jwt.verify(token, secretToken, (err, decode) => {         
          if (err)
               return res.status(401).json({ error: "Token inválido" });
          req.id_user = decode.id_user;          
          next();
     });
}

export default { CreateToken, ValidateToken }