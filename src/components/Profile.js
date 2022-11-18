/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import EditProfile from "./EditProfile";
import "../css/Profile.css";

export default function Profile({ user, setAlert }) {
  const [profileData, setProfileData] = useState({});
  const [posts, setPosts] = useState({});
  const [promoting, setPromoting] = useState(false);
  const [owner, setOwner] = useState(false);
  const [editing, setEditing] = useState(false);
  const params = useParams();
  let error

  useEffect(() => {
    updateProfile(params.username);
  }, [params.username, user]);

  useEffect(() => {
    fetch("/users/" + params.username).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
       error = res.statusText
      }
    }).then((data) => {
      console.log(data)
      setProfileData(data.user)
    })
  }, [params.username, user]);

  function updateFollowing(profile) {
    for (let promoter of profile.followers) {
      if (promoter.username === user) {
        setPromoting(true);
        return;
      }
    }
    setPromoting(false);
  }

  function updateProfile(username) {
    fetch("/users/" + username)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setAlert({
            variant: "danger",
            message: "Profile does not exist.",
          });
          return;
        }
      })
      .catch((err) => console.error(err));
  }

  function followClick() {
    if (owner) return;

    if (!promoting) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: user, id: profileData._id }),
      };
      fetch("/addFollower", requestOptions)
        .then((res) => res.json())
        .then((_data) => updateProfile(params.username));
    } else {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: user, id: profileData._id }),
      };
      fetch("/removeFollower", requestOptions)
        .then((res) => res.json())
        .then((_data) => updateProfile(params.username));
    }
  }

  function hideEditCallback() {
    updateProfile(params.username);
    setEditing(false);
  }

  if (profileData == {}) return null;

  return (
    <div className="profile">
      <EditProfile
        user={user}
        show={editing}
        hideCallback={hideEditCallback}
        profileData={profileData}
        setAlert={setAlert}
      />
      <div className="profile-banner">
        <h4>{profileData.userName}</h4>
        <div className="profile-data">
          <img
            src={
              profileData.avatar
                ? profileData.avatar
                : "https://via.placeholder.com/80"
            }
            id="profile-img"
          />
          <div className="vertical-data">
            <p>
              <strong>Posts</strong>
            </p>
            <h4>{posts ? posts.length : 0}</h4>
          </div>
          <div className="vertical-data">
            <p>
              <strong>Promoters</strong>
            </p>
            <h4>{profileData.followers ? profileData.followers.length : 0}</h4>
          </div>
          <div className="vertical-data">
            <p>
              <strong>Promoting</strong>
            </p>
            <h4>{profileData.following ? profileData.following : 0}</h4>
          </div>
          <div className="follow-button">
            {user && !owner ? (
              <Button
                variant={promoting ? "danger" : "success"}
                onClick={followClick}
              >
                {promoting ? "UnPromote" : "Promote"}
              </Button>
            ) : null}
            {user && owner ? (
              <Button variant="primary" onClick={() => setEditing(true)}>
                Edit
              </Button>
            ) : null}
          </div>
        </div>
        <div className="profile-bio">
          <div className="profile-name">
            <strong>
              {(profileData.first_name ? profileData.first_name : "") +
                " " +
                (profileData.last_name ? profileData.last_name : "")}
            </strong>
          </div>
          <div className="profile-text">{profileData.bio}</div>
        </div>
      </div>
      <div className="break"></div>
      <div className="profile-posts-wrapper">
        <div className="profile-posts">
          {posts && posts.length > 0
            ? posts.map((post, idx) => {
                return <img src={post.photo.asset.url} key={idx} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
