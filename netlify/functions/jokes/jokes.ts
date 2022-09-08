import jokes from './jokes.json'

export const handler = async () => {
 
  const randomIndex = Math.floor(Math.random() * jokes.length);
//fetch weather api from weather.com
// const response = await fetch('https://weather.com/weather/today/l/USCA0996:1:US');
// const response = await fetch("http://localhost:8888/.netlify/functions/get_neo_db").then(response => response.json());

console.log("response");

  console.log(randomIndex);
  const randomJoke = jokes[randomIndex];
  return {
    statusCode: 200,
    body: randomJoke,
  };
};