import CredentialsProvider from "next-auth/providers/credentials";
import { conn } from "@/lib/mysql";
import bcrypt from "bcrypt";
import util from "util";

const connection = await conn.getConnection();

export const options = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const{username,password}=credentials;
        
        if (username) {
          const checkEmailSql = 'SELECT * FROM usuario WHERE usu_correo = ?';
          try {
            
            const [result] = await connection.query(checkEmailSql, [username]);
        if (result.length > 0) {
            const match = await bcrypt.compare(password.toString(), result[0].usu_pass);
            if (match) {
              const user= {
                image: `${result[0].id_usu}`,
                name: `${result[0].id_rol}`,
                email: `${result[0].id_wsid}`
            }
            connection.release();
                return user

            } else {
              connection.release();
                return null
            }
        } else {
          connection.release();
            return null
        }
          } catch (err) {
           connection.release();
            return null;
          }
        }
      },
    }),
  ],

  pages: {
    signIn: "/signIn",
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    async session(session, user) {
      session.rol = user.rol;
      session.webSocketId = user.webSocketId;
      return session;
    },
  },

  
};