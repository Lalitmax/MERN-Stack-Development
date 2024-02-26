// Api  - > application programing interface
const URL = "https://cat-fact.herokuapp.com/facts"

var figlet = require("figlet");
const getFact = document.querySelector('.fact')
const btn = document.querySelector('.btn')


async function getFacts() {
    let r = Math.floor(Math.random() * 5);
    console.log('getting data...')
    let response = await fetch(URL);
    let data = await response.json();
    getFact.innerHTML = data[r].text;
    return data[1].text;
}

 

btn.addEventListener('click', () => {
    getFacts()
})




figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
