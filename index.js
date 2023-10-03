 let value=document.querySelector("button");
   function convert(){
    let cel=document.getElementById('set').value;
    let far=(cel*1.8)+32;
    document.getElementById('get').innerText=`${far} F`;
   }
 value.addEventListener("click",convert);