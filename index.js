const inputBox= document.getElementById("input-box");
console.log(inputBox)

const cont =document.getElementById("longcontainer")
function addTask(){
    if(inputBox.value === ''){
        alert("enter input")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        longcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value="";
    savedata()
}
longcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        savedata()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false)

function savedata(){
    localStorage.setItem("data",longcontainer.innerHTML)
}
function showlist(){
    longcontainer.innerHTML=localStorage.getItem("data")
}
showlist()