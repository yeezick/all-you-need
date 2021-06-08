// const username = prompt("Before we begin, what's your name?")
// const city = prompt("What city are you in?");

/*========================
  Header
========================*/
// const userID = document.querySelector("div.left > h3");
// userID.innerText = username;

// const greeting = document.querySelector("#home>h1");
// greeting.innerText = username;



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
    quoteAuthor.innerText = `By: ${response.data.author}`

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

/*=====================
Weather
======================*/
const weatherUrl =
"http://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=8bfa4632074d84a3d3524ed387556ad4"; //has preset location to miami

const temperature = document.querySelector("#temp");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");


const weather = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    
    // weather data variables
    
    temperature.innerText = data.main.temp;
    high.innerText = data.main.temp_max;
    low.innerText = data.main.temp_min;
    humidity.innerText = data.main.humidity;
    
    // console.log(temperature);
  } catch (error) {
    console.log(error);
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
  e.preventDefault();
  const listItem = document.createElement("li");
  listItem.innerText = todoInput.value;
  todoList.appendChild(listItem);
  listItem.addEventListener('click', deleteListItem);
  todoInput.value = '';
}
todoButton.addEventListener("click", createList);

function deleteListItem () {
  this.remove();
}

/*=====================
News
======================*/

/*=====================
News
======================*/
