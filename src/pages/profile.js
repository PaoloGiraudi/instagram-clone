import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUserByUsername } from "../services/firebase";
import Header from "../components/header.js";
import UserProfile from "../components/profile";
import * as ROUTES from "../constans/routes";

export default function Profile() {
  const { username } = useParams();
  const [userExists, setUserExist] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExistsToLoadProfile() {
      const doesUserExist = await getUserByUsername(username);
      if (!doesUserExist) {
        history.push(ROUTES.NOT_FOUND);
      } else {
        setUserExist(true);
      }
    }
    checkUserExistsToLoadProfile();
  }, [username, history]);

  return userExists ? (
    <div className="bg-gray">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile username={username} />
      </div>
    </div>
  ) : null;
}
