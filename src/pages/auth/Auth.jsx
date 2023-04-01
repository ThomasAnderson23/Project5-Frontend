import { Box, Typography, TextField, Button } from "@mui/material";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import "./Auth.css"

const Auth = () => {
  const state = useContext(UserContext)

  const [signUp, setSignUp] = useState(false);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password:""
  }
  const [user, setUser] = useState(initialValues);

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if(signUp){
       state.registerUser(user)
    } else {
       state.loginUser(user)
    }

    setUser(initialValues)

  }

  console.log(user)

  const resetState = () => {
    setSignUp(!signUp)
    setUser(initialValues)
  }


  return (
    <div className="BackgroundAuth">
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{ ":hover": { boxShadow: "10px 10px 20px #246560" } }}
        >
          <Typography variant="h2" padding={3} textAlign={"center"} fontFamily="cursive">
            {signUp ? "Regístrate" : "Inicia Sesión"}
          </Typography>
          {signUp && (
            <TextField
              onChange={handleChange}
              type={"text"}
              placeholder="Nombre"
              name="firstname"
              variant="outlined"
              value={user.firstname}
              style={{ marginBottom: 10}}
              

            />
          )}
          {signUp && (
            <TextField
              onChange={handleChange}
              type={"text"}
              placeholder="Apellido"
              name="lastname"
              variant="outlined"
              value={user.lastname}
              style={{ marginBottom: 10}}
              

            />
          )}
          <TextField
            onChange={handleChange}
            type={"email"}
            placeholder="Email"
            name="email"
            variant="outlined"
            value={user.email}
            style={{ marginBottom: 10}}
          />
          <TextField
            onChange={handleChange}
            type={"password"}
            placeholder="Contraseña"
            name="password"
            variant="outlined"
            value={user.password}
            
          />
          <Button
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3, backgroundColor: "#246560"  }}
            variant="contained"
            className="buttonDefault"
            
          >
            {signUp ? "Regístrate" : "Inicia Sesión"}
          </Button>
          <Button
            onClick={resetState}
            sx={{ marginTop: 3, borderRadius: 3, backgroundColor: "#246560" }}
            className="buttonDefault"
          >
            {!signUp ? "Ir a Registro" : "Ir a Inicio de Sesión"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
