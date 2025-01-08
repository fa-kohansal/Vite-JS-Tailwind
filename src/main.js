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
let men = document.getElementById("Men");
let menItems = document.getElementById("menItems");
let shopBy = document.getElementById("ShopBy");
let shopByItems = document.getElementById("shopByItems");
let sale = document.getElementById("Sale");
let saleItems = document.getElementById("saleItems");

women.addEventListener("mouseenter", () => {
  womenItems.classList.remove("hidden");
  menItems.classList.add("hidden");
  saleItems.classList.add("hidden");
  shopByItems.classList.add("hidden");
});
womenItems.addEventListener("mouseleave", () => {
  womenItems.classList.add("hidden");

});
men.addEventListener("mouseenter", () => {
  menItems.classList.remove("hidden");
  womenItems.classList.add("hidden");
  saleItems.classList.add("hidden");
  shopByItems.classList.add("hidden");
});
menItems.addEventListener("mouseleave", () => {
  menItems.classList.add("hidden");
});
shopBy.addEventListener("mouseenter", () => {
  shopByItems.classList.remove("hidden");
  menItems.classList.add("hidden");
  womenItems.classList.add("hidden");
  saleItems.classList.add("hidden");

});
shopByItems.addEventListener("mouseleave", () => {
  shopByItems.classList.add("hidden");
});
sale.addEventListener("mouseenter", () => {
  saleItems.classList.remove("hidden");
  shopByItems.classList.add("hidden");
  menItems.classList.add("hidden");
  womenItems.classList.add("hidden");
});
saleItems.addEventListener("mouseleave", () => {
  saleItems.classList.add("hidden");
  
});

let fetchSlides=async()=>{
  try{
    let slides="";
    let data = await fetch("http://localhost:3000/slides");
    let res=await data.json();
    slides = res.map((elem) => {
      return `
        <div class="linksImg relative ">
            <h1 class="headlineText  absolute text-center top-6">${elem.title1}<br>${elem.title2}</h1>
          <img  src="${elem.img}" alt="${elem.title1}">
          </div>
      `;
    });
    document.querySelector(".BagsLink ").innerHTML=slides.join("")
  }catch(error){
    console.log(error);
    
  }
}
fetchSlides();

