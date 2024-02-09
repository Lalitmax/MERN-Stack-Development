const URL = "https://cat-fact.herokuapp.com/facts";


let btn = document.querySelector('.getFacts');
let facts = document.querySelector('.facts')

function getRandomNum()
{
    return   Math.floor(Math.random()*5)
}

// const getFacts = async ()=>{
//     let response = await fetch(URL);
//     console.log(response)
//     let data = await response.json();
//     console.log(data) 
//     facts.innerText =data[getRandomNum()].text;

// }

// using .then
 
function getFacts(){

    fetch(URL).then((response)=>{
        return response.json();
    
    }).then((data)=>{
        console.log(data) 
        facts.innerText =data[getRandomNum()].text;
        
    })
}





btn.addEventListener('click', getFacts)