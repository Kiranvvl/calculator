class Calculator{
    constructor(previousOperandNum,currentOpreandNum){
        this.previousOperandNum = previousOperandNum
        this.currentOpreandNum = currentOpreandNum
        this.clear()
    }

   clear() {
    this.previousOperand = ''
    this.currentOpreand = ''
    this.operation = undefined
   }
   delete() {
    this.currentOperand = this.currentOperand.toString() .slice(0 -1)
   }

   appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.'))return
    this.currentOperand = this.currentOperand.toString() + number.toString
   }

   chooseOperation(operation) {
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
   }
   compute() {
    let computation
    const prev = parseFloat (this.previousOperand)
    const current = parseFloat (this.currentOperand)
    if(isNaN(prev)||isNaN(current)) return
    switch(this.operation){
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
            
        case '*':
            computation = prev * current
            break
        case '/':
            computation = prev / current
            break
            default:
                return
            
    }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ' '
   }

   getDisplayNumber(number){
    const stringNumber = number .tostring()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if(isNaN(integerDigits)){
        integerDisplay = ''
    }else{
        integerDisplay = integerDigits .toLocaleString('en',{
            maximumFractionDigits:0})
        }
    if (decimalDigits != null){
        return` ${integerDisplay} ${decimalDigits}`
    }else{
        return integerDisplay
    }
    
    
    const floatNumber = parseFloat(number)
    if(isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
   }

   updateDisplay(){
    this.currentOperandNum .innerText =
    this.getDisplayNumber (this.currentOpreand)
    if(this.operation != null){
    this.previousOperandNum .innerText = 
   ` {this.getDisplayNumber(this.previousOpreand)} ${this.operation}`
    }else{
        this.previousOperandNum .innerText = ' '
    }

   }
   
}







const numberButtons = document .querySelectorAll('[ data-number ]')
const operationButtons = document .querySelectorAll('[ data-operation ]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-all-clear]')
const previousOperandNum = document.querySelector('[data-previous-num]')
const currentOpreandNum = document.querySelector('[data-current-num]')



const calculator = new Calculator( previousOperandNum,currentOpreandNum)
numberButtons.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innertext)
        calculator .updateDisplay()
    })
    
});


operationButtons.forEach(button => {
    button.addEventListener('click',() =>{
        calculator.chooseOperation(button.innertext)
        calculator .updateDisplay()
    })
    
});

equalButton.addEventListener('click',button => {
    calculator.compute()
    calculator.updateDisplay()
})

allclearButton.addEventListener('click',button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',button => {
    calculator.delete()
    calculator.updateDisplay()
})