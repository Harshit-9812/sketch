const board = document.getElementById("board")


var drawState=false
window.addEventListener("mousedown",function(e){
if(e.button===1){
   drawState = true;
}});

window.addEventListener("mouseup",function(e){
if(e.button===1){
   drawState = false;
}});


function gridChange(value) {
    
    board.replaceChildren();
    board.dataset.size = value
    for(let i = 0;i<value;i++){
        var col = document.createElement("div")
        col.className = "board-col"
        board.appendChild(col)

        for(let j = 0;j<value;j++){
            var row = document.createElement("div")
            row.className = "board-row"
            col.appendChild(row)
            row.dataset.x = j
            row.dataset.y = i
        }
    }
    
    
}

    board.onmouseover = (event) => {
        if(drawState == true){
        var colors = colorRandomiser()
    
        event.target.style.backgroundColor = "rgb("+colors[0].toString()+", "+colors[1].toString()+", "+colors[2].toString()+")"
        console.log(color)
        colorchange(board.dataset.size,event.target.x,event.target.y)}
    };

function colorchange(value,x,y){
    
}
function colorRandomiser(){
    var red = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0) + 1)) + 0
    var green = Math.floor(Math.random() * (Math.floor(200) - Math.ceil(0) + 1)) + 0
    var blue = Math.floor(Math.random() * (Math.floor(150) - Math.ceil(0) + 1)) + 0
    return [red,green,blue]
}