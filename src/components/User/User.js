import React from "react";
import { addUser, removeUser } from "../../utilities/fakedb";
// import { add, sub as subtract } from "../../utilities/calculate";
const User = (props) => {
    /* const sum = add(10, 20);
    console.log(sum);
    const sub = subtract(20, 10);
    console.log(sub); */
    const { _id, name, age, gender, picture } = props.user;

    return (
        <div className="p-2 m-2 border border-primary">
            <img className="rounded" src={picture} alt="" />
            <h1 className="text-primary fw-bold">{name}</h1>
            <p className="text-success fw-bold">
                Gender: {gender}
                <br />
                Age: {age}
            </p>
            <button onClick={() => addUser(_id)} className="btn btn-primary">
                Add
            </button>
            <button onClick={() => removeUser(_id)} className="btn btn-danger">
                Remove
            </button>
        </div>
    );
};

export default User;
