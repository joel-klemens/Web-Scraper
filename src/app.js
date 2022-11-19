const feedDisplay = document.querySelector("#feed");

fetch("http://localhost:8000/results")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((instruction) => {
            const instructionItem =
                `<div><p>` +
                instruction.instruction +
                `</p><a href="` +
                instruction.url +
                `">` +
                instruction.url +
                `</a></div>`;
            feedDisplay.insertAdjacentHTML("beforeend", instructionItem);
        });
    })
    .catch((err) => console.log(err));
