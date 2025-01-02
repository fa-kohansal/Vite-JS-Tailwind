import "../public/css/main.css";
import"../public/css/style.css"
import"../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
export function locChoose(){
    let locationList=document.getElementById("locationList");
    if(locationList.classList.contains("hidden")){
        locationList.classList.remove("hidden");
    }else{
        locationList.classList.add("hidden")
    }
    
}
window.locChoose=locChoose;
let womenItems=document.getElementById("womenItems");
let women=document.getElementById("Women")
women.addEventListener("mouseenter",()=>{
    womenItems.classList.remove("hidden")
})
womenItems.addEventListener("mouseleave",()=>{
    womenItems.classList.add("hidden")
})