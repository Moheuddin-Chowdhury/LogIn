var test=document.querySelector(".formContainer");
var  B=document.querySelector(".btn1");
function login(){
  test.style.display="block";
  B.style.opacity="0.5";
}

window.onclick=function (event){
  if(event.target==test){
    test.style.display="none";
    B.style.opacity="1";
  }
}
var cls=document.querySelector(".close");
   cls.addEventListener("click",function(){
       test.style.display="none";
       B.style.opacity="1";
   });


