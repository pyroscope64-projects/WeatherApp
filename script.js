const WeatherApp = (() => {
    const button = document.getElementById("btn");
    button.addEventListener('click', function Event() {
        fetchData();
        button.removeEventListener('click', Event)
    })
    function clearScreen() {
        let body = document.querySelector(".content");
        body.innerHTML = "";
        let p = document.createElement("p");
        p.className = "display";
        p.innerText = "Loading...";
        body.appendChild(p);
    }
    function fetchData() {
        let input = document.querySelector("input").value;
        console.log(input);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&id=524901&appid=e2087043e5a0407f7f920a028f406f9e`)
        .then(function(response) {
            return response.json;
        })
        .then (function(response) {
            console.log(response.json);
        })
    }
})();