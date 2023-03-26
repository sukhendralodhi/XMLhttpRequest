const btn = document.getElementById("btn");

const getUser = () => {
  fetch("/users.json")
    .then((response) => response.json())
    .then((usersData) => {
      let output = "";
      usersData.forEach((user) => {
        output += `
            <hr>
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Age: ${user.age}</li>
                <li>Email: ${user.email} </li>
            </ul>
            `;
      });
      document.getElementById('container').innerHTML = output;
    });
};

btn.addEventListener("click", (e) => {
  getUser();
});
