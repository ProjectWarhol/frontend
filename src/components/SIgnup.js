import {useState} from "react";
import {Form, Button} from "react-bootstrap";

export default function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function createAccount(e){
        const requestOptions={
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
            })
        }
        fetch("/users/express", requestOptions).then(res=> {
            return res.json()
        })
        .then(data=>{console.log(data)}).catch(err => {console.log(err)});
    }
    
    return (
    <Form className="">
        <Form.Group controlId="mb-4">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="mb-4">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={createAccount}>Create Account</Button>
    </Form>);
}