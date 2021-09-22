import "./App.css";
import { useEffect, useState } from "react";
import User from "./components/User/User";

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("./userData.json")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    /* const ageReducer = (previous, current) => previous + current.age;
    const totalAge = users.reduce(ageReducer, 0);
    console.log(totalAge); */

    return (
        <div className="App">
            <h1>User Loaded: {users.length}</h1>
            {users.map((user) => (
                <User key={user._id} user={user}></User>
            ))}
        </div>
    );
}

export default App;
