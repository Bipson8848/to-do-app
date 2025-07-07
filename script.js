let submit=document.querySelector(".submit-button");
submit.addEventListener("click",()=>{
    let input1=document.querySelector("#input1").textContent;
    addwork(input1);
});
function addwork(input1){
    let li = document.createElement("li");
    let display=document.querySelector("ol");
    li.appendChild(document.createTextNode(input1));
    display.appendChild(li);
}