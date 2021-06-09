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
greeting.innerHTML = `Welcome Home,<br> ${username}`;
*/

/*========================
Inspirational Quote
========================*/
const inspoUrl = "http://api.quotable.io/random";

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
/*

const newsUrl =
"https://newsapi.org/v2/top-headlines?country=us&apiKey=6f7081542a3346a4865b765624dc3a48";

const newsDropdown = document.querySelector("#publisher-dropdown");
const newsText = document.querySelector(".news-text");
const headline = document.querySelector(".headline");
const author = document.querySelector(".author");

// callback function make a new option elment for each publisher
function publisherOptions (articles) {
  // set default article
  newsText.innerText = articles[0].description;
  headline.innerText = articles[0].title;
  author.innerText = articles[0].author;
  
  let count = 0;
  articles.forEach(article => {
    // create option element with inner text set to publisher brand
    const option = document.createElement("option");
    option.innerText = article.source.name;
    option.setAttribute("value", count )
    newsDropdown.appendChild(option);
    count +=1;
  });
}
// function to change news content based on user choice
function changeNews(articles) {
  console.log(articles);
  const newPublisher = newsDropdown.value;
  console.log(newPublisher)
  newsText.innerText = articles[newPublisher].description;
  headline.innerText = articles[newPublisher].title;
  author.innerText = articles[newPublisher].author;
}


const getNews = async (url) => {
  try {
    const response = await axios.get(url);
    const articles = response.data.articles;
    newsDropdown.addEventListener("change", () => changeNews(articles))
    // console.log(articles[0].source)
    publisherOptions(articles);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
getNews(newsUrl)

*/

/*=====================
Weather
======================*/
// change "miami to ${city}"
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=8bfa4632074d84a3d3524ed387556ad4`; //has preset location to miami

const temperature = document.querySelector("#temp");
const description = document.querySelector("#description");
const weatherImage = document.querySelector(".weather-image");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");

// function to read weather description and assign proper icon to image element
function weatherChanger(url) {
  // changes the values on html to current data based on api
  const main = url.data.main;
  const desc = url.data.weather[0].description;

  temperature.innerText = main.temp;
  high.innerText = main.temp_max;
  low.innerText = main.temp_min;
  humidity.innerText = main.humidity;

  description.innerText = desc;
  // depending on case, image attribute will have different icon
  let iconCode = null;

  switch (desc) {
    case "clear sky":
      iconCode = "01d";
      break;
    case "few clouds":
      iconCode = "02d";
      break;
    case "scattered clouds":
      iconCode = "03d";
      break;
    case "broken clouds":
      iconCode = "04d";
      break;
    case "shower rain":
      iconCode = "09d";
      break;
    case "rain":
      iconCode = "10d";
      break;
    case "thunderstorm":
      iconCode = "11d";
      break;
    case "snow":
      iconCode = "13d";
      break;
    case "mist":
      iconCode = "50d";
      break;

    default: iconCode = "clear sky"
      break;
  }
  weatherImage.setAttribute("src", `http://openweathermap.org/img/wn/${iconCode}@2x.png` )

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
