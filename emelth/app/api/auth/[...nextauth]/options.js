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
            const res = await axios.post("http://192.168.20.150:3001/login", {
              username,
              password,
            });
            if (res) {
              let data = res.data;
              if (data.Status == "Success") {
                console.log("Si jalo xddddddd");
                console.log(data.user)
                const user ={
               name: `${data.user.rol}`,//en realidad es el rol
                email: `${data.user.WebSocketId}`,//en realidad es el websocketId
                image: `${data.user.id}`,//en realidad es el id de usuario
               
              };
                console.log(user)
              
                return user;
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