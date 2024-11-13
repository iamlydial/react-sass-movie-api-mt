import express from 'express';
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/src/App.jsx";


const app = express();
app.use(express.static("dist"));
app.get("*", (req, res) => {
  const appString = ReactDOMServer.renderToString(<App />); 

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${appString}</div>  <!-- Inject SSR content -->
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
