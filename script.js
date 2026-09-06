const messages = [
"якщо ти це читаєш то розблокай в снепі",
];


let randomMessage = messages[Math.floor(Math.random() * messages.length)];

const messageElement = document.getElementById("message");


if (typeof randomMessage === "object") {

    messageElement.innerHTML = `
    ${randomMessage.text}
    <br>
    <img src="${randomMessage.image}" class="flower">
    `;

} else {

    messageElement.innerHTML = randomMessage;

}


setInterval(createEmoji, 700);