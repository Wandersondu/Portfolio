const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    // Add digit to calculator screen
    addDigit(digit) {
        this.currentOperation = digit;
        this.updateScreen();

    }
    // Change values of the calculator sreen
    updadeScreen(){
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);



buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => { //dentro de cada btn tem um event list (e) obj do evento
        const value = e.target.innerText; // pega o valor do botao clicado, vai guiar pelo valor do btn

        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else{
            console.log("Op: ", value);
        }


    })
})