console.log("running")
document.querySelector('.kross').style.display ='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
    document.querySelector('.kross').style.display='none'
    }
    else{
         document.querySelector('.kross').style.display='inline'
         setTimeout(()=>{
document.querySelector('.ham').style.display='none'
         },300);
    }

})