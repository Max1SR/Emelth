import axios from "axios";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{8,15}$/;

function validateUserRegister(data) {
  console.log(data);
  if (validateUser(data.username, data.password) && validateRol(data.rol)) {
    axios
      .post("/api/user", data)
      .then((res) => {
        let data = res.data;
        alert(data.message);
        return data.message;
      })
      .catch((err) => {
        console.log(err);

        // Handle error, display error message
        return "Error al iniciar sesión. Por favor, intente de nuevo.";
      });
  } else {
    return "Rellene todos los campos correctamente";
  }
}

function validateUser(user, password) {
  return emailRegex.test(user) && passwordRegex.test(password);
}


function validateRol(rol) {
  let number = parseInt(rol);
  return number > 0 && number < 4;
}

export { validateUserRegister};
