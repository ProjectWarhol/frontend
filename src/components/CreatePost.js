/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/CreatePost.css";

export default function CreatePost({ user, setAlert }) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setAlert({
        variant: "danger",
        message: "Please sign in to make a post!",
      });
      navigate("/login");
    }
  }, [user]);

  function uploadFile(e) {
    setFile(e.target.files[0]);
  }

  function makePost() {
    const formData = new FormData();
    formData.append("creatorUsername", user);
    formData.append("name", title);
    formData.append("description", description);
    formData.append("image", file);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("/nft/mint", requestOptions)
      .then((_res) => {
        setAlert({ variant: "success", message: "Post created!" });
        navigate("/");
      })
      .catch((err) => setAlert({ variant: "danger", message: err.message }));
  }

  return (
    <Form className="post-form">
      <div className="create-post">
        <Form.Group className="mb-3">
          <img
            src={file ? URL.createObjectURL(file) : null}
            className="post-image"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <input type="file" accept="image/*" onChange={uploadFile} />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
            type="text"
            placeholder="Enter a title"
            onInput={(e) => setTitle(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Enter a description"
            onInput={(e) => setdescription(e.target.value)}
          />
        </Form.Group>
        <div className="post-button-wrapper">
          <Button
            variant="primary"
            type="button"
            onClick={makePost}
            className="post-button">
            Post
          </Button>
        </div>
      </div>
    </Form>
  );
}
