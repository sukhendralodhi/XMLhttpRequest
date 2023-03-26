const btn = document.getElementById('btn');

const getData = () => {
    const http = new XMLHttpRequest();
    http.open("GET", "users.json", true);

    http.onload = function() {
        if(this.status === 200) {
            const usersData = JSON.parse(this.responseText);
            console.log(usersData); 
            let output = "";
            usersData.forEach(user => {
                output += `
                <hr>
                <ul>
                    <li>Id: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Age: ${user.age}</li>
                    <li>Email: ${user.email}</li>
                </ul>
                `
            });
            document.getElementById('container').innerHTML = output;
        }
    }
    http.send();
}



btn.addEventListener('click', (e) => {
    e.preventDefault();
    getData();
});