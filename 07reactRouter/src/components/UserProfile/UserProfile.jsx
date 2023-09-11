import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userid } = useParams();

  return <div className="bg-orange-100 text-3xl p-5">User ID: {userid}</div>;
};

export default UserProfile;
