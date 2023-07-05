const allClear = document.querySelector('[data-all-clear]');
const del = document.querySelector('[data-delete]');
const number = document.querySelectorAll('[data-number]');
const operand = document.querySelectorAll('[data-operand]');
const equals = document.querySelectorAll('[data-equals]');
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

	}

	appendNumber(number) {

	}

	chooseOperation(operation) {

	}

	compute() {

	}

	updateDisplay() {

	}
}
