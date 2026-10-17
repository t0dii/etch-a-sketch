const container = document.querySelector("#container");
let btn = document.querySelector("button");

function createGrid(i){
    for(let row=0; row<i; row++){
        for(let column=0; column<i; column++){
            let div1 = document.createElement("div");
            div1.classList.add("grid");
            div1.style.backgroundColor="green";
            div1.style.width=`${960/i}px`;
            div1.style.height=`${960/i}px`;
            container.appendChild(div1);

        }
    }
}

container.addEventListener('mouseover', handleHover);
function handleHover(e){
    e.target.style.background = "red";
    createGrid();
}

btn.addEventListener('click', function clear(e){
    let promptSquares = prompt("Please enter a number of squares");
    if(promptSquares >= 1 && promptSquares <=100){
        reset(container);
        createGrid(promptSquares);
    }else{
        alert("wrong number of squares, please choose between 1, 100");
    }
})
function reset(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}