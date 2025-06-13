// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navBar .forEach(function(a){
    a.addEventListener  ("click",function(){
        navcollapse.classList.remove(show);
    
        
    })
})

// counter design

document.addEventListener("DOMContentLoaded", ()=> {

function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
increment = end > start ? 1 : -1,
step = Math.abs(Math.floor(duration / range)) ,
timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if(current == end){
        clearInterval(timer);

     }
}, step);

}
var data = {'start': 0, "end":1287, "duration":500}
counter("count1", data.start,data.end,data.duration);
counter("count2", 1000,1833,500);
counter("count3", 0,1527,500);
counter("count4", 0,1150,500);
});
    
    