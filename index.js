const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth-4;
canvas.height = window.innerHeight-4;
let x
let y
let mode = 0

    function coordinate(event) {
        x = event.clientX;
        y = event.clientY;

        

        console.log(x, y)

    }

    function test() {
        ctx.fillRect(x-10, y-10, 20, 20)
    }

    ctx.fillStyle = "#00000";




