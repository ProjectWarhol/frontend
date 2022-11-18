import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SignUp({ setAlert, setUser, setWallet }) {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  let error

  function createAccount(e) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email,
        password: password,
        userName: username,
      }),
    };

    fetch("/users/express", requestOptions)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
         error = res.statusText
        }
      })
      .then((data) =>{
        if (!data) {
          setAlert({
            variant: "danger",
            message: "A User with that name already Exists!",
          });
        } 
        else {
          setAlert({ variant: "success", message: "Successfully signup up!" });
          setUser(data.userId);
          setWallet({walletId: data.walletId, publicKey: data.walletInformation.address, PrivateKey: data.walletInformation.privateKey})
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  }

  function updateUsername(e) {
    setUsername(e.target.value);
  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <Form className="center-form">
      <Form.Group className="mb-4">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          onInput={updateUsername}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Email"
          onInput={updateEmail}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onInput={updatePassword}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={createAccount}>
        Create Account
      </Button>
    </Form>
  );
}
