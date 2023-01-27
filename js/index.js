document.addEventListener("DOMContentLoaded",()=>{
    const ocupation=document.querySelector(".person_ocupation");
    
    function time_slider_ocupation() {
        setTimeout(()=>{
            ocupation.textContent="Programador web";
        },0);
        setTimeout(()=>{
            ocupation.textContent="Analista software";
        },4000);
    }
    time_slider_ocupation();
    setInterval(time_slider_ocupation,8000);
});