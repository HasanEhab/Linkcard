import React from "react";
import "../css/card.css";
import { deleteSavedUser, deleteUser } from "../Redux/reducers/userSlice";
import { useSelector, useDispatch } from "react-redux";

function SaveCard(props) {
  const dispatsh = useDispatch();

  return (
    <div className="card container-lg my-4 p-3 d-flex flex-wrap">
      <div className="card__data d-flex justify-content-around align-items-center">
        <div className="d-flex flex-column justify-content-center">
          <p className="card__data__titles my-md-2 my-1">first name</p>
          <p className="my-md-2 my-1">{props.userData.first}</p>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <p className="card__data__titles my-md-2 my-1">last name</p>
          <p className="my-md-2 my-1">{props.userData.last}</p>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <p className="card__data__titles my-md-2 my-1">gender</p>
          <p className="my-md-2 my-1">{props.userData.gender}</p>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <p className="card__data__titles my-md-2 my-1">age</p>
          <p className="my-md-2 my-1">{props.userData.age}</p>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <p className="card__data__titles my-md-2 my-1">email</p>
          <p className="my-md-2 my-1 card__data__email">
            {props.userData.email}
          </p>
        </div>
      </div>
      <div className="card__buttons d-flex justify-content-around align-items-center">
        <div>
          <button
            onClick={() => {
              dispatsh(deleteSavedUser(props.userData.id));
            }}
            className="btn btn-danger text-capitalize px-3"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SaveCard;
