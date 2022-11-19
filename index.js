const PORT = 8000;

const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const url = "https://tastesbetterfromscratch.com/crispy-baked-chicken-wings/";

axios(url)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const instructions = [];
        $("li", html).each(function () {
            const instruction = $(this).text();
            const url = $(this).find("a").attr("href");
            instructions.push({
                instruction,
                url,
            });
        });
        console.log(instructions);
    })
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log("server running on PORT", PORT));
