/* function addUser(id) {

} */
const addUser = (id) => {
    let Users = localStorage.getItem("Users");
    Users = JSON.parse(Users);

    if (Users) {
        if (Users[id]) {
            Users[id] += 1;
        } else {
            console.log(Users[id]);
            Users[id] = 1;
        }
    } else {
        Users = {};
        Users[id] = 1;
    }

    localStorage.setItem("Users", JSON.stringify(Users));
};

const removeUser = (id) => {
    let Users = localStorage.getItem("Users");
    Users = JSON.parse(Users);

    if (Users) {
        if (Users[id]) {
            delete Users[id];
            localStorage.setItem("Users", JSON.stringify(Users));
        }
    }
};

export { addUser, removeUser };
