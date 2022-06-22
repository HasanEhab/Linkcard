import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/card";
import SaveCard from "../components/saveCard";
import { addUsers } from "../Redux/reducers/userSlice";

function Screen2() {
  const users = useSelector((state) => state.user.savedUsers);
  const dispatsh = useDispatch();

  return (
    <div className="py-4 px-lg-0 px-3">
      {users.length ? (
        users.map((user) => {
          return <SaveCard key={user.id} userData={user} />;
        })
      ) : (
        <p className='mt-4'>Empty</p>
      )}
    </div>
  );
}

export default Screen2;
