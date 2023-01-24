window.onload = function () {
    let button = document.getElementById("pulsa");
    let count = 0;
    let maxCount = Math.floor(Math.random() * 11) + 5; // Número aleatorio de veces entre 5 y 15
    button.onmouseover = moveButton;
    function moveButton() {
        if (count < maxCount) {
            count++;
            let x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
            let y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
            button.style.left = x + "px";
            button.style.top = y + "px";
        } else {
            button.onmouseover = null;
        }
    }
    button.onclick = function () {
        if (count === maxCount) {
            if(confirm("¡Me pillaste!")) location.reload();
        }
    };
};