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

        //check if current operation alrealy has a dot
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
        return;
    }

        this.currentOperation = digit;
        this.updateScreen();
    }

    // Process all calculator operations
    processOperation(operation) {

        //get current and previous value

        let operationValue;
        const previous = +this.previousOperationText.innerText;
        const current = +this.currentOperationText.innerText;
         
        switch(operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;
        }
    }
    

    // Change values of the calculator sreen

    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ){

        if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // Check if value is zero, if it is just add curret value
            if(previous === 0) {
                operationValue = current;
            }

            // Add current value to previous
            this.previousOperationText.innerText =`${operationValue} ${operation}`;
            this.currentOperationText.innerText = ".";
        }
    }   
}

const calc = new Calculator(previousOperationText, currentOperationText);



buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => { //dentro de cada btn tem um event list (e) obj do evento
        const value = e.target.innerText; // pega o valor do botao clicado, vai guiar pelo valor do btn

        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else{
            Calculator.processOperation(value);
        }


    })
})