const body=document.body;

const btn=document.getElementById("themeBtn");

body.classList.add("blue-theme");

btn.onclick=()=>{

if(body.classList.contains("blue-theme")){

body.classList.remove("blue-theme");

body.classList.add("pink-theme");

btn.innerHTML="🌸 Pink Mode";

}else{

body.classList.remove("pink-theme");

body.classList.add("blue-theme");

btn.innerHTML="☁️ Blue Mode";

}

}