//gmail checker
    document.getElementById("gmail_button").addEventListener("click",  ()=> {
        const gmail_input = document.getElementById("gmail_input");
        const gmail_result = document.getElementById("gmail_result");

        // Регулярное выражение для проверки Gmail адреса
        const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (gmailRegExp.test(gmail_input.value)) {
            gmail_result.textContent = "You WIN";
            gmail_result.style.color = "green";
        } else {
            gmail_result.textContent = "You Lose";
            gmail_result.style.color = "red";
        }
    });


//left
const parentBlock = document.querySelector(".parent_block");
    const childBlock = document.querySelector(".child_block");

    function moveRight(position) {
        if (position < parentBlock.offsetWidth - childBlock.offsetWidth) {
            childBlock.style.left = position + "px";
            setTimeout(function () {
                moveRight(position + 1);
            }, 1); // Задержка для создания анимации движения
        }
    }

    moveRight(0); // Запустить движение с позиции 0





