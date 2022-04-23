import React from "react";
import { Card, Button } from "react-bootstrap";
function Profile({p}) {
  return (
    <div>
      <div>
        <img src={p.Img} />
        <h1>{p.Fullname}</h1>
        <h3>{p.Bio}</h3>
        <h3>{p.profession}</h3>
      </div>
    </div>
  );
}

export default Profile;
