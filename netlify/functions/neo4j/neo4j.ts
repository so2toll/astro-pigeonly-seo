import { Handler } from '@netlify/functions'
import fetch from "node-fetch";

export const handler: Handler = async (event, context) => {
  const { name = 'sYtranger' } = event.queryStringParameters;
  const getUrl = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
  .then(json => {
    console.log(11222)
    console.log(json);
    return json}
  );
  const getUrl2 = await fetch('https://dummyjson.com/products/1') 
  .then(response => response.json())
  .then(json => {
    console.log(11222)
    console.log(json);
    return json}
  );
  console.log(getUrl);
  console.log(getUrl2);
  // const data = await fetch('https://example.com/movies.json')
  // const data = await getUrl[0];
  console.log("response");
  console.log(name);
  console.log("r222esponse");
  console.log("4444response");
  // console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `ttereHellos, ${getUrl.title}!`,
    }),
  }
}
