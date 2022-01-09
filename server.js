let express = require("express");
var http = require("http");
let React = require("react");
let ReactDOMServer = require("react-dom/server");
let Resume = require("./src/pages/resume");

const PORT = 8082;

let app = express();

app.get("/generateResume", (req, res) => {
    let html = ReactDOMServer.renderToStaticMarkup(React.createElement(Resume));

    console.log(html);

    res.send("Success");
});

let server = http.createServer(app);

server.listen(PORT);