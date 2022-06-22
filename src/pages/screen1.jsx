import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/card";
import { addUsers } from "../Redux/reducers/userSlice";

function Screen1() {
  const users = useSelector((state) => state.user.users);

  return (
    <div className="py-4 px-lg-0 px-3">
      {users.length ? (
        users.map((user) => {
          return <Card key={user.id} userData={user} />;
        })
      ) : (
        <p className="mt-4">Loading...</p>
      )}
    </div>
  );
}

export default Screen1;
