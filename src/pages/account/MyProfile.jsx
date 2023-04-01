import { ClassNames } from "@emotion/react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Container,
  Modal,
  TextField,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { grey } from "@mui/material/colors";
import "./MyProfile.css"

const MyProfile = () => {
  const { userState, userSubmitForm, verifyToken } = useContext(UserContext);

  const { firstname, lastname, email, age } = userState.infoUser;

  const [open, setOpen] = useState(false);

  const [userForm, setUserForm] = useState({
    firstname: "",
    lastname: "",
    age,
    email,
  });

  const handleChange = async (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = () => {
    userSubmitForm(userForm);
  };

  useEffect(() => {
    const updateData = () => {
      return setUserForm({
        ...userForm,
        firstname,
        lastname,
        email,
        age,
      });
    };

    updateData();
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (

    <div className="backgroundProfile">
      <div>
        <Container maxWidth="sm" border="solid" sx={{ backgroundColor: "#246560", borderRadius: 25 }}>
          <Card sx={{ alignContent: "center", textAlign: "center", backgroundColor: "#FDE0B2", borderColor: "#20180C", borderWidth: 2, borderRadius: 25}}>
            <AccountCircleIcon sx={{ fontSize: 200, color: grey[500], }}/> 
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
                
              >
                <h2>Bienvenido: </h2>
                {`${firstname} ${lastname}`}
              </Typography>
              <Typography variant="h6" color="text.secondary" align="center">
                {email}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button onClick={handleOpen} variant="contained" color="primary" className="buttonDefault" sx={{ backgroundColor: "#246560" }}>
                Editar Usuario
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
      <div>
        <div>
          <Box
            component="form"
            onSubmit={(e) => sendData(e)}
            display={!open ? "none" : "flex"}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
              justifyContent: "center",
              alignContent: "center",
              marginTop: "20px",
              
            }}
            noValidate
            autoComplete="off"
          >
            <div className="editUser">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                align="center"
              >
                Edita tu usuario
              </Typography>
              <div>
                <TextField
                  id="outlined-disabled"
                  label="Firstname"
                  value={userForm.firstname}
                  name="firstname"
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div>
                <TextField
                  id="outlined-disabled"
                  label="Lastname"
                  value={userForm.lastname}
                  onChange={handleChange}
                  name="lastname"
                  type="text"
                />
              </div>

              <div>
                <TextField
                  id="outlined-disabled"
                  label="Age"
                  value={userForm.age}
                  type="number"
                  onChange={handleChange}
                  name="age"
                />
              </div>
              <div>
                <TextField
                  id="outlined-disabled"
                  label="Email"
                  value={userForm.email}
                  type="email"
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div>
                <Button type="submit" variant="contained" className="buttonDefault" align= "center" sx={{ backgroundColor: "#246560", justifyContent: "center" }}>
                  Enviar
                </Button> 
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
