const app = function(){

   function isEven(num){
      console.log(num%2==0)

   }

   const sum =  (n1,n2)=>{
      console.log(n1+n2);
      
   }

   const helloWorld = ()=>{
      let var1="var1";
      function hW(){
         console.log("HElllo world");
      }
      hW()
   }

   console.log("App func called")
   helloWorld()
   isEven(3)
}


app()
