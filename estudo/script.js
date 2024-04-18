//f3fe12eb25d538742b2e8ec1365738d3
//https://api.openweathermap.org/data/2.5/weather?q=Paulista&appid=f3fe12eb25d538742b2e8ec1365738d3

//Variáveis e seleções de elementos 
const cityinput = document.querySelector("#city-input");
const searchBt = document.querySelector("#search");



//Funções



//Eventos
searchBt.addEventListener("click", (e) => {
    e.preventDefault(); //evita enviar o formulário
    console.log("teste");

    const city = cityinput.value;

    console.log(city);
    
})