import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";


export default function Login({ setAlert, setUser, setWallet, setUserName }) {
  const [userCredential, setUserCredential] = useState("");
  const [password, setPassword] = useState("");
  let error
  const navigate = useNavigate();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userCredential, password }),
  }

  function handleLogin(e) {
    fetch("/users/login" , requestOptions)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
         error = res.statusText
        }
      })
      .then((data) => {
        if (error) {
          setAlert({
            variant: "danger",
            message: "No user with that name exists!",
          });
        } 
        else {
          setAlert({ variant: "success", message: "Successfully logged in!" });
          setUser(data.user.id);
          setUserName(data.user.userName);
          setWallet({walletId: data.user.walletId});
          navigate("/");
        }
      })
      .catch((err) => setAlert({ variant: "danger", message: err.message }));
  }

  return (
    <Form className="center-form">
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          onInput={(e) => {
            setUserCredential(e.target.value);
          }}
        />
        <Form.Control 
        type="password" 
        placeholder="Password"  
        onInput={(e) => {
          setPassword(e.target.value)
          }}
          />
        <small className="form-text text-muted">
          Don't have an account? Sign up <Link to="/sign-up">here</Link>
        </small>
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleLogin}>
        Login
      </Button>
    </Form>
  );
}
