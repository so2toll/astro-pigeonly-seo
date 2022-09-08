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

  // npm install --save neo4j-driver
// node example.js
const neo4j = require('neo4j-driver');
const driver = neo4j.driver(process.env.NEO4J_URI,
                  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD), 
                  {/* encrypted: 'ENCRYPTION_OFF' */});

const query =
  `
  MATCH (movie:Movie {title:$favorite})<-[:ACTED_IN]-(actor)-[:ACTED_IN]->(rec:Movie)
   RETURN distinct rec.title as title LIMIT 20
  `;

const params = {"favorite": "The Matrix"};

const session = driver.session({database:"neo4j"});

const firstTitle = await session.run(query, params)
  .then((result) => {
    const allTitles = [];
    result.records.forEach((record) => {
        console.log(record.get('title'));
        allTitles.push(record.get('title'));
        
    });
    session.close();
    driver.close();
    return allTitles;
  })
  .catch((error) => {
    console.error(error);
  });
  console.log(firstTitle[6], "this is now here at title response");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `ttereHellos, ${firstTitle[6]}!`,
    }),
  }
}
