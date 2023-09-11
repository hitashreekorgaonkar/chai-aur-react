import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("data", data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="text-center m-4 text-indigo-600 bg-blue-200 p-4 text-lg">
        Github followers: {data?.followers}
        <img
          src={data?.avatar_url}
          className="mt-3"
          alt="Git picture"
          width={300}
        />
      </div>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
