const messages = [
"катя я радий що зміг тебе порадувати 🌼",
"сподіваюсь ця маленька річ подарувала тобі посмішку 🌼",
"нехай у тебе сьогодні буде хороший день 🌼",
"ти заслуговуєш на багато щасливих моментів 🌼",
"мені було приємно зробити це саме для тебе 🌼",
"нехай у твоєму житті буде більше радості 🌼",
"просто маленьке нагадування: ти чудова людина 🌼",
"бажаю тобі частіше посміхатися і радіти дрібницям 🌼",
"сподіваюсь цей сюрприз залишить приємний спогад 🌼",
"твоя посмішка робить моменти особливими 🌼",
"нехай сьогодні трапиться щось хороше 🌼",
"я радий що можу подарувати тобі трохи тепла 🌼",
"бережи себе добре? 🌼",
"нехай у тебе буде більше приводів для щирої радості 🌼",
"ти дуже хороша людина 🌼",
"бажаю тобі багато моментів які хочеться запамятати 🌼",
"нехай поруч завжди будуть хороші люди 🌼",
"просто хотів зробити твій день трохи кращим 🌼",
"тримай маленьку порцію гарного настрою 🌼",
"нехай твої мрії понемножку здійснюються 🌼",
"дякую за моменти які залишаються в памяті 🌼",
"ти варта всього найкращого 🌼",
"нехай у твоєму серці завжди буде спокій 🌼",
"маленький подарунок зроблений від душі 🌼",
"сподіваюсь ти зараз посміхнулась 🌼 :)",
"нехай у тебе буде багато щасливих днів 🌼",
"ти робиш цей світ трохи красивішим 🌼",
"бажаю тобі тепла радості і хорошого настрою 🌼",
"це маленьке повідомлення просто для тебе 🌼",
"я хотів залишити тобі щось приємне",
"сподіваюсь колись ти відкриєш це і знову посміхнешся 🌼",

{
text: "Букет ромашок тобі ",
image: "daisy.png"
},
{
text: "Ми?",
image: "kosak.png"
},
{
text: "Сьогодні побалую",
image: "klush.png"
}
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



function createEmoji() {

let emojis = [
"❤️‍🩹",
"💚",
"🩵",
"💜",
"🩶",
"🧡",
"🖤",
"🤍",
"🌼",
"✨"
];


let emoji = document.createElement("span");

emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

emoji.classList.add("floating");

emoji.style.left = Math.random() * 100 + "vw";

emoji.style.fontSize = (Math.random() * 15 + 15) + "px";

emoji.style.animationDuration = (Math.random() * 3 + 4) + "s";


document.body.appendChild(emoji);


setTimeout(() => {

    emoji.remove();

}, 7000);

}


setInterval(createEmoji, 700);



// ТАЙМЕР

const targetDate = new Date("2026-08-05T00:00:00");

const button = document.getElementById("nextBtn");


function updateCountdown() {

const now = new Date();

const diff = targetDate - now;



if (diff <= 0) {


    button.disabled = false;

    button.innerHTML = "💌 Відкрити";


  button.onclick = () => {

    button.style.display = "none";

    document.getElementById("codeBox").style.display = "block";

};


    clearInterval(timer);

    return;

}



const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

const minutes = Math.floor((diff / (1000 * 60)) % 60);

const seconds = Math.floor((diff / 1000) % 60);



button.innerHTML = 
`Part 2🖤🖤🖤<br>
${days}д ${hours}г ${minutes}хв ${seconds}с`;

}



updateCountdown();

const timer = setInterval(updateCountdown, 1000);
function checkCode() {

    const code = document.getElementById("secretCode").value;

    if (code === "хреста розпяли") {

        window.location.href = "page2.html";

    } else {

        document.getElementById("error").innerHTML =
        "Неправильний код 🖤";

    }

}