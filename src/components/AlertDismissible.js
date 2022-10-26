import { useState } from "react";
import {Alert} from "react-bootstrap";


export default function AlertDismissible(variant, message, deleteAlert){
const [show, setShow] = useState(true);

    if(show){
        return <Alert variant={variant} onClose={() => {
            deleteAlert(); 
            setShow(false)
            }}
            dimissible
        > 
        {message}
        </Alert>
    }else{
        return null
    }
}