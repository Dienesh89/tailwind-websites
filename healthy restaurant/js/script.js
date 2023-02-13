// sidebar
function toggleSidebar(){
    let sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.classList.toggle("hiddenmy");
    let info = document.getElementsByClassName("info")[0];
    info.classList.toggle("pt-5");
}
// bars animation
let bars = document.getElementById("bars");
bars.addEventListener("click",()=>{
    bars.style.background = "#5e6c85"
    setInterval(()=>{
        bars.style.background = "#7287ae"
    },3000)
})

