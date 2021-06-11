/* UNCOMMENT TO ACTIVATE HEADER CHANGES 
let username = prompt("Before we begin, what's your name?")
 const city = prompt("What city are you in?");

/*========================
  Header
========================
// function to take username and turn first letter into capital letter
function firstLetterCase(name) {
  // grabs first letter and splits into accessible array
  let strArr = name.split("");
  // grabs first letter of array 
  let firstLetter = strArr[0];
  // uppercases it
  let capLetter = firstLetter.toUpperCase();  
  // returns first letter to array 
  strArr.splice(0,1,capLetter)
  // joins array to string again 
  let readyCased = strArr.join('');
  // returns it as new value for username
  username = readyCased;
  return username;
}
// firstLetterCase(username);


const userID = document.querySelector("div.left > h3");
userID.innerText = username;

const greeting = document.querySelector("#home>h1");
greeting.innerHTML = `Welcome<br> Home,<br> ${username}`;
*/

/*========================
Inspirational Quote
========================*/
const inspoUrl = "http://cors-lite.herokuapp.com/http://api.quotable.io/random";

const quote = document.querySelector(".inspirational-quote");
const quoteAuthor = document.querySelector(".quote-author");

const getQuotes = async (url) => {
  try {
    const response = await axios.get(url);
    const quoteString = response.data.content;

    // changes author text to author from api
    quoteAuthor.innerHTML = `By: ${response.data.author}`;

    // changes quote from p tag to quote from API
    const quoteChange = (string) => (quote.innerText = string);
    quoteChange(quoteString);
  } catch (error) {
    console.log(error);
  }
};
getQuotes(inspoUrl);

/*=====================
  News
======================*/

const newsUrl =
  "http://api.mediastack.com/v1/news?access_key=6093edc68c7322dfa2913f7433667f4d&countries=us";

const newsDropdown = document.querySelector("#publisher-dropdown");
const newsText = document.querySelector(".news-text");
const headline = document.querySelector(".headline");
const author = document.querySelector(".author");

// callback function make a new option elment for each publisher
function publisherOptions(articles) {
  // set default article
  newsText.innerText = articles[0].description;
  headline.innerText = articles[0].title;
  author.innerText = articles[0].author;

  let count = 0;
  articles.forEach((article) => {
    // create option element with inner text set to publisher brand
    const option = document.createElement("option");
    // console.log(article)
    if (article.author === null) {
      option.innerText = "Anonymous";
    } else {
      option.innerText = article.author;
    }
    option.setAttribute("value", count);
    newsDropdown.appendChild(option);
    count += 1;
  });
}
// function to change news content based on user choice
function changeNews(articles) {
  console.log(articles);
  const newPublisher = newsDropdown.value;
  console.log(newPublisher);
  newsText.innerText = articles[newPublisher].description;
  headline.innerText = articles[newPublisher].title;
  author.innerText = articles[newPublisher].author;
}

const getNews = async (url) => {
  try {
    const response = await axios.get(url);
    const articles = response.data.data;

    newsDropdown.addEventListener("change", () => changeNews(articles));
    // console.log(articles[0].source)
    publisherOptions(articles);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
getNews(newsUrl);

/*=====================
Weather
======================*/
// change "miami to ${city}"
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=8bfa4632074d84a3d3524ed387556ad4`; //has preset location to miami

const temperature = document.querySelector("#temp");
const description = document.querySelector("#description");
const weatherImage = document.querySelector(".weather-image > img");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");

// FIGURE OUT WHY THIS DOESNT WORK
function firstLetterCaseWeather(description) {
  let strArr = description.split("");
  let firstLetter = strArr[0];
  let capLetter = firstLetter.toUpperCase();
  strArr.splice(0, 1, capLetter);
  let readyCased = strArr.join("");
  desc = readyCased;
  // console.log(desc);
  return desc;
}

// function to read weather description and assign proper icon to image element
function weatherChanger(url) {
  // changes the values on html to current data based on api
  const main = url.data.main;
  const desc = "clear sky";
  // url.data.weather[0].description;
  // console.log(desc);

  temperature.innerText = `${main.temp}°F`;
  high.innerText = `${main.temp_max}°F`;
  low.innerText = `${main.temp_min}°F`;
  humidity.innerText = main.humidity;

  description.innerText = firstLetterCaseWeather(desc);
  // depending on case, image attribute will have different icon
  let iconCode = null;
  const forecastContainer = document.querySelector(".forecast");

  switch (desc) {
    case "clear sky":
      iconCode = "01d";
      forecastContainer.style.background =
        "url(https://media0.giphy.com/media/VxbvpfaTTo3le/giphy.gif?cid=ecf05e4733z2ls10lumuj6ubt31ta8zpzydt3chqkkg01nsu&rid=giphy.gif&ct=g) no-repeat center center / cover";
      break;
    case "few clouds":
      iconCode = "02d";
      forecastContainer.style.background =
        "url(https://media2.giphy.com/media/c31WXGK1jLQBy/giphy.gif?cid=ecf05e471onzfrnepln511m6mm6ly4brsfxn0styxspk17ft&rid=giphy.gif&ct=g) no-repeat center center / cover";
      break;
    case "scattered clouds":
      iconCode = "03d";
      forecastContainer.style.background =
        "url(https://media2.giphy.com/media/PIh4laWJlz9bq/giphy.gif?cid=ecf05e471onzfrnepln511m6mm6ly4brsfxn0styxspk17ft&rid=giphy.gif&ct=g) no-repeat center center / cover";
      break;
    case "broken clouds":
      iconCode = "04d";
      forecastContainer.style.background =
        "url(https://media4.giphy.com/media/KwZoSJlvep6Vy/giphy.gif?cid=ecf05e471onzfrnepln511m6mm6ly4brsfxn0styxspk17ft&rid=giphy.gif&ct=g) no-repeat center center / cover";
      break;
    case "shower rain":
      iconCode = "09d";
      forecastContainer.style.background =
        "url(https://media3.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif?cid=ecf05e471p9m92z7h5171nt1gqb8yryaxpdd1b2r4e1jaf65&rid=giphy.gif&ct=g) no-repeat center center / cover";
      break;
    case "rain":
      iconCode = "10d";
      forecastContainer.style.background = "url(https://media3.giphy.com/media/26DMWExfbZSiV0Btm/giphy.gif?cid=ecf05e47q2g6jqmkf5roe2nfq9uz9ti616fyoxcpaqy9ppnt&rid=giphy.gif&ct=g) no-repeat center center / cover"
      break;
    case "thunderstorm":
      iconCode = "11d";
      forecastContainer.style.backgroundImage =
        "url(https://media0.giphy.com/media/aPlzgxciAwVj2/giphy.gif?cid=ecf05e471odl2cftb03dc0hfeahz10o5bz9sd1z724x4wsw6&rid=giphy.gif&ct=g)";
      break;
    case "snow":
      iconCode = "13d";
      forecastContainer.style.background = "url(https://media1.giphy.com/media/irxyCZ6H4zS5G/giphy.gif?cid=ecf05e476nzma8h1i5y0eil18x9ox5iq8zowajtof4m7lagw&rid=giphy.gif&ct=g) no-repeat center center / cover"
      break;
    case "mist":
      iconCode = "50d";
      forecastContainer.style.background = "url(https://media2.giphy.com/media/yhZr5Wx7CBFbq/giphy.gif?cid=ecf05e4791cdropxqd51klfr6r34y4c1nmcx3a2sijuhbbjc&rid=giphy.gif&ct=g) no-repeat center center / cover"
      break;

    default:
      iconCode = "clear sky";
      break;
  }
  weatherImage.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  );

  // console.log(data);
}

const weather = async (url) => {
  try {
    const response = await axios.get(url);
    weatherChanger(response);

    // console.log(temperature);
  } catch (error) {
    console.error(error);
  }
};
weather(weatherUrl);

/*========================
    To-Do
========================*/
const todoList = document.querySelector(".list-items");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

const createList = (e) => {
  console.log(e);
  e.preventDefault();
  const listItem = document.createElement("li");
  listItem.innerText = todoInput.value;
  todoList.appendChild(listItem);
  listItem.addEventListener("click", deleteListItem);
  todoInput.value = "";
};
todoButton.addEventListener("click", createList);

function deleteListItem() {
  this.remove();
}

/*=====================
News
======================*/

/*=====================
News
======================*/
