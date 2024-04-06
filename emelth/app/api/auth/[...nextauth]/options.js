import CredentialsProvider from "next-auth/providers/credentials";
import { sign, verify } from 'jsonwebtoken'
import axios from "axios";
export const options = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const{username,password}=credentials;
        if (username) {
          try {
            const res = await axios.post("http://localhost:3001/login", {
              username,
              password,
            });
            if (res) {
              let data = res.data;
              if (data.Status == "Success") {
                console.log("Si jalo xddddddd");
                const user = data.user;
                console.log(user)
                const token = sign(user, process.env.NEXTAUTH_SECRET)
                // Return the token instead of the user
                console.log(token)
                return token,user;
              } else {
                console.log("Error al iniciar sesión");
                return null;
              }
            } else {
              console.log("nada");
              return null;
            }
          } catch (err) {
            console.error(err);
            return null;
          }
        }
      },
    }),
  ],

  pages: {
    signIn: "/signIn",
  },
  session: { strategy: "jwt" },
  
};