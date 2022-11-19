const PORT = 8000;

const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

//URL of the site you want to scrape data from
const url = "https://tastesbetterfromscratch.com/crispy-baked-chicken-wings/";

app.get("/results", (req, res) => {
    axios(url)
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            //array to hold scrapped data
            const instructions = [];
            //what elements on the page you want to scrape
            $("li", html).each(function () {
                const instruction = $(this).text();
                const url = $(this).find("a").attr("href");
                instructions.push({
                    instruction,
                    url,
                });
            });
            //console.log(instructions);
            res.json(instructions);
        })
        .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("server running on PORT", PORT));
