
let searchBtn = document.querySelector('.searchBtn');
let searchBar = document.querySelector('#searchcity');
let todayDay = document.querySelector('#todayDay');
let todayDate = document.querySelector('#todayDate');
let tomorrowDay = document.querySelector('#tomorrowDay');
let afterTommorowDay = document.querySelector('#afterTommorowDay');
let searchedcity = document.querySelector('#searchedcity');
let todayDegree = document.querySelector('#todayDegree');
let todayImg = document.querySelector('#todayImg');
let todayState = document.querySelector('#todayState');
let tomorrowImg = document.querySelector('#tomorrowImg');
let tomorrowDegree = document.querySelector('#tomorrowDegree');
let tomorrowNightDegree = document.querySelector('#tomorrowNightDegree');
let tomorrowState = document.querySelector('#tomorrowState');
let afterTomorrowImg = document.querySelector('#afterTomorrowImg');
let afterTomorrowDegree = document.querySelector('#afterTomorrowDegree');
let afterTomorrowNightDegree = document.querySelector('#afterTomorrowNightDegree');
let afterTomorrowState = document.querySelector('#afterTomorrowState');
let country;
todayDay.innerHTML = getDate(0);
tomorrowDay.innerHTML = getDate(1);
afterTommorowDay.innerHTML = getDate(2);
todayDate.innerHTML = getMonthAndDay();


weather('cairo')
{
    searchBtn.addEventListener('click' , function() {
        country = searchBar.value;
        weather(country)
    })
}


async function weather(country)
{
    let result = await getWeather(country);
    searchBar.innerHTML = result.location.name
    todayDegree.innerHTML = result.current.temp_c + " c"
    todayImg.src = "https:" + result.current.condition.icon
    todayState.innerHTML = result.current.condition.text
    var tommorowforcast = result.forecast.forecastday
    tomorrowImg.src = "https:" + tommorowforcast[1].day.condition.icon
    tomorrowDegree.innerHTML = tommorowforcast[1].day.maxtemp_c
    tomorrowNightDegree.innerHTML = tommorowforcast[1].day.mintemp_c
    tomorrowState.innerHTML = tommorowforcast[1].day.condition.text
    afterTomorrowImg.src = "https:" + tommorowforcast[2].day.condition.icon
    afterTomorrowDegree.innerHTML = tommorowforcast[2].day.maxtemp_c
    afterTomorrowNightDegree.innerHTML = tommorowforcast[2].day.mintemp_c
    afterTomorrowState.innerHTML = tommorowforcast[2].day.condition.text
}



async function getWeather(city) {
    var apiResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0844b08ef1434956972141122232602&q=${city}&days=3&aqi=no&alerts=no`)
    var finalResult = await apiResponse.json();
    return finalResult;
}

getWeather();


function getDate(days) {
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date();
    let x = d.getDay() + days
    if (x >= 7) {
        x = x - 7
    }
    let day = weekday[x];
    return day;
}

function getMonthAndDay() {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    let x = month[d.getMonth()];
    return(d.getDate() + x );
}








// async function ay7aga() 
// {
//     await getWeather('cairo');
//     await getWeather('cairo');
//     await getWeather('cairo');
//     await getWeather('cairo');
// }

// ay7aga();




