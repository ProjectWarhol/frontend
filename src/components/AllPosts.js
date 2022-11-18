import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function AllPosts({ user, wallet }) {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    if (user) {
      fetch("/content/getAllPosts")
        .then((res) => res.json())
        .then((data) => {
          setAllPosts(data.data)
        })
        .catch((err) => console.error(err));
    } else {
      setAllPosts(null)
    }
  }, [user]);

  return (
    <div className="center mt-3">
      {allPostsData ? (
        allPostsData.map((obj, index) => (
          <div
            className="center m-2"
            style={{ min_width: "30%", maxWidth: "400px" }}
            key={index}
          >
            <Card>
              <div className="d-flex align-items-center flex-column">
                <Card.Img
                  variant="top"
                  src={obj.contentPath}
                  style={{ width: "100%" }}
                ></Card.Img>
              </div>
              <Card.Body>
                <Link to={"/profile/" + obj.userId}>
                  <Card.Title>{obj.title}</Card.Title>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">
                {obj.createdAt}
              </Card.Footer>
            </Card>
          </div>
        ))
      ) : (
        <p>No posts to display. {user}</p>
      )}
    </div>
  );
}
