

var currentNumberWrapper = document.getElementById("currentNumber")
var incrementButton = document.getElementById("increment")
var decrementButton = document.getElementById("decrement")
var currentNumber = 0;

decrementButton.addEventListener("click", decrement);

function decrement(){
    if (currentNumber > -10)
    {
        if(currentNumber < 1)
        {
            currentNumberWrapper.setAttribute('style', 'color: red');
        }
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

incrementButton.addEventListener("click", increment);

function increment(){
    if (currentNumber <= 9)
    {
        if(currentNumber >=-1)
        {
            currentNumberWrapper.setAttribute('style', 'color:black')
        }
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }   
}





