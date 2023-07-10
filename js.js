const allClear = document.querySelector('[data-all-clear]');
const del = document.querySelector('[data-delete]');
const number = document.querySelectorAll('[data-number]');
const operand = document.querySelectorAll('[data-operand]');
const equals = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement
		this.currentOperandTextElement = currentOperandTextElement
		this.clear()
	}

	clear() {
		this.currentOperand = ''
		this.previousOperand = ''
		this.operation = undefined
	}

	delete() {
		this.currentOperand = this.currentOperand.slice(0, -1)
	}

	appendNumber(number) {
		if (this.currentOperand.includes('.') && number === '.') return
		this.currentOperand = this.currentOperand + number
		console.log(this.currentOperand)
    }

	chooseOperation(operation) {
        if (this.currentOperand === '') return
		if (this.previousOperand !== '') {
			this.compute()
		}
		this.operation = operation
		this.previousOperand = this.currentOperand
		this.currentOperand = ''
		console.log(operation)
	}

	compute() {
		const prev = parseFloat(this.previousOperand)
		const current = parseFloat(this.currentOperand)

       if (this.operation === '÷') {
		this.currentOperand = prev / current
	   } else if (this.operation === '*') {
        this.currentOperand = prev * current
	   } else if (this.operation === '+') {
		this.currentOperand = prev + current
	   } else if (this.operation === '-') {
		this.currentOperand = prev - current
	   }
	}

	equal() {
        this.compute()
		this.previousOperand = ''
		this.operation = undefined
		console.log(this.currentOperand)
	}

	updateDisplay() {
		this.currentOperandTextElement.innerText = this.currentOperand
		this.previousOperandTextElement.innerText = this.previousOperand
	}
}


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

number.forEach(function(button) {
	button.addEventListener('click', function() {
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
	})
})

operand.forEach(function(button) {
	button.addEventListener('click', function() {
		calculator.chooseOperation(button.innerText)
		calculator.updateDisplay()
	})
})

del.addEventListener('click', function() {
	calculator.delete()
	calculator.updateDisplay()
})

allClear.addEventListener('click', function() {
	calculator.clear()
	calculator.updateDisplay()
})

equals.addEventListener('click', function() {
    calculator.equal()
	calculator.updateDisplay()
})