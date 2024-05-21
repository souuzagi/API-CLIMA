

//Variáveis e seleções de elementos 
const apiKey = "f3fe12eb25d538742b2e8ec1365738d3";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";
const cityinput = document.querySelector("#city-input");
const searchBt = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");  

const weatherData = document.querySelector("#weather-data");

const errorMessageContainer = document.querySelector("#error-message");
const cityErrorElement = document.querySelector("#error-message span");
const loader = document.querySelector("#loader");



//Funções[
const getWeatherData = async(city) =>{
    toggleLoader();
const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
const res = await fetch(apiWeatherURL);
const data = await res.json ();
    toggleLoader();
return data; 

};

const showWeatherData = async(city) =>{
    hideInformation();
    //Verifica se a cidade existe e faz o tratamento de erro    
    const data = await getWeatherData(city);
    if (data.cod ==="404"){
        showErrorMessage(city);
        return
        
    }

   
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    // let descricao = data.weather[0].description;
    // let descricao2 = descricao.charAt(0).toUpperCase() + descricao.slice(1);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute('src', `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}% KM/H`;

    // Altera a imagem de fundo
    document.body.style.backgroundImage = `url("${apiUnsplash + city}")`;

    weatherData.classList.remove("hide");



};
//Função que esconde as divs
const hideInformation = () =>{
    errorMessageContainer.classList.add("hide");
    weatherData.classList.add("hide");

}

//Função de Loading
const toggleLoader = () => {
    loader.classList.toggle("hide");

};


// Tratamento de erro
const showErrorMessage = (city) => { 
    cityErrorElement.innerText = city;
    errorMessageContainer.classList.remove("hide");

};

//Eventos
searchBt.addEventListener("click", (e) => {
    e.preventDefault(); //evita enviar o formulário


    const city = cityinput.value;

   showWeatherData(city);


    
});

cityinput. addEventListener("keyup", (e) => {
    if (e.code === "Enter") { 
        const city = e.target.value;
        showWeatherData (city);
    }
});