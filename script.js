const messages = [
    "Катю я радий, що зміг тебе порадувати 🌼",
    "Сподіваюсь ця маленька річ подарувала тобі посмішку 🌼",
    "Нехай у тебе сьогодні буде хороший день 🌼",
    "Ти заслуговуєш на багато щасливих моментів 🌼",
    "Мені було приємно зробити це саме для тебе🌼",
    "Нехай у твоєму житті буде більше радості🌼",
    "Просто маленьке нагадування: ти чудова людина🌼",
    "Бажаю тобі частіше посміхатися і радіти дрібницям🌼",
    "Сподіваюсь, цей сюрприз залишить приємний спогад🌼",
    "Твоя посмішка робить моменти особливими🌼",
    "Нехай сьогодні трапиться щось хороше🌼",
    "Я радий, що можу подарувати тобі трохи тепла🌼",
    "Бережи себе добре?🌼 ",
    "Нехай у тебе буде більше приводів для щирої радості🌼",
    "Ти дуже світла людина 🌼",
    "Бажаю тобі багато моментів які хочеться запам’ятати🌼",
    "Нехай поруч завжди будуть хороші люди🌼",
    "Просто хотів зробити твій день трохи кращим🌼",
    "Тримай маленьку порцію гарного настрою 🌼",
    "Нехай твої мрії потроху здійснюються🌼",
    "Дякую за моменти які залишаються в пам’яті🌼",
    "Ти варта всього найкращого 🌼",
    "Нехай у твоєму серці завжди буде спокій🌼",
    "Маленький подарунок зроблений від душі🌼",
    "Сподіваюсь ти зараз посміхнулась🌼 :)",
    "Нехай у тебе буде багато щасливих днів🌼",
    "Ти робиш цей світ трохи красивішим🌼",
    "Бажаю тобі тепла радості і хорошого настрою🌼",
    "Це маленьке повідомлення просто для тебе🌼",
    "Я хотів залишити тобі щось приємне",
    "Сподіваюсь, колись ти відкриєш це і знову посміхнешся🌼",
    {
    text: "букет ромашок тобі 🌼",
    image: "daisy.png"
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


document.getElementById("message").innerHTML = messages[randomMessage];


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
        "🤍",
        "💜"
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