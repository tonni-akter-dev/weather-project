const API_KEY =`a80728f00483d628f576bb4c472747ea`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => display(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const display = temp => {
    console.log(temp);
    setInnerText('city', temp.name);
    setInnerText('temp', temp.main.temp);
    setInnerText('condition', temp.weather[0].main);
    // set weather icon...............
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
   }