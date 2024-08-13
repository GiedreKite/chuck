const buttonDOM = document.querySelector("button");
const textDOM = document.querySelector("p");
const url = "https://api.chucknorris.io/jokes/random";

buttonDOM.addEventListener("click", getJoke)

function getJoke() {
    fetch(url)
    .then(res => res.json())
    .then(data => textDOM.innerHTML = data.value)
}