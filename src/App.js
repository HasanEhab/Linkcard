import logo from "./logo.svg";
import "./App.css";
import Screen1 from "./pages/screen1";
import Header from "./components/header";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Screen2 from "./pages/screen2";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { addUsers } from "./Redux/reducers/userSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

function App() {
  const dispatsh = useDispatch();

  let usersArr = [];
  useEffect(() => {
    const getdata = async () => {
      for (let i = 0; i < 10; i++) {
        axios.get("https://randomuser.me/api/").then((alldata) => {
          {
            const data = alldata.data.results[0];
            usersArr.push({
              first: data.name.first,
              last: data.name.last,
              gender: data.gender,
              email: data.email,
              age: data.dob.age,
              id: usersArr.length,
            });
            if (i == 9) {
              dispatsh(addUsers(usersArr.sort((a, b) => a.age - b.age)));
            }
          }
        });
      }
    };
    getdata();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"Linkcard/"} exact element={<Screen1 />} />
          <Route path={"Linkcard/screen2"} exact element={<Screen2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
