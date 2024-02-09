// callback hell like nesting ak ke andar ak
let data = ["lalitmax123", "rahul1", "mukesh23"];
function dataContainer(ele) {

    for (let i = 0; i < data.length; i++) {
        if (ele === data[i]) {
            return true
        }
    }

    return false;

}

function getData(data,getNextData) {
    setTimeout(() => {
        if (dataContainer(data)) {
            console.log( data," You can Enter");
            if(getNextData)
            {
                getNextData()
            }
            
        } else {
            console.log(data, " You need to First sign up")
            if(getNextData){
                getNextData()
            }
            
        }
       

    }, 2000);
    
}

getData("lalitmax123",()=>{
    getData("rahul1",()=>{
        getData("mukesh23") // this structure look like pyramid of doom
    })
})
 