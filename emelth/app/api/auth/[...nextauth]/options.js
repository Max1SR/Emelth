import CredentialsProvider from "next-auth/providers/credentials";
import { decode, getToken } from "next-auth/jwt";
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
        console.log(credentials.username);
        const user = { id: "42", name: username, password: password };
        //const secretKey = process.env.NEXTAUTH_URL;
        const accessToken = decode(credentials.csrfToken);

        console.log(accessToken);
        //console.log(credentials);
        //console.log(credentials.csrfToken)
        console.log(username);

        console.log(password);
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
};
