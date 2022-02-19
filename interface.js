document.addEventListener('DOMContentLoaded', () => {

    let square = document.querySelectorAll(".square");
        
    square.forEach((square) => {
        square.addEventListener('click', handleClick);        
    })

})

function handleClick(event){
    console.log(event.target);

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert(" O jogo acabou, o vencedor é o player " + playerTime );
        }, 10 );
        
        
        
    };
    updateSquare();

} 
function updateSquare() {
    let square = document.querySelectorAll(" .square");

    square.forEach((square)=>{
        let position = square.id;
        let symbols = board[position];

        if (symbols != '') {
            square.innerHTML = `<div class="${symbols}"></div>`
        }
    })
}

function reset() {
    var symbols = document.querySelectorAll('x');
    var symbols = document.querySelectorAll('o');

    symbols.forEach(function(e,i) {
        e.innerHTML = " ";
    });

    symbols.forEach(function(e,i) {
        e.innerHTML = " ";
    });

    fillBox();
}