
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})
  
const manU = document.querySelector('.pl:first-child');
const liverpool = document.querySelector('.pl:nth-child(2)');
const arsenal = document.querySelector('.pl:nth-child(3)');
const manCity = document.querySelector('.pl:nth-child(4)');
const chelsea = document.querySelector('.pl:nth-child(5)');

manU.addEventListener("click", function(){
    window.location = "Premier-league.html";
})
liverpool.addEventListener("click", function(){
    window.location = "liverpool.html";
})
arsenal.addEventListener("click", function(){
    window.location = "arsenal.html";
})
manCity.addEventListener("click", function(){
    window.location = "manCity.html";
})
chelsea.addEventListener("click", function(){
    window.location = "chelsea.html";
})


const leagueSelect = document.getElementById("leagueSelect");

leagueSelect.addEventListener("change", () => {
    const selectedLeague = leagueSelect.value;
    if (selectedLeague) {
        // Navigate to the corresponding HTML page
        window.location.href = `${selectedLeague}.html`;
    }
});