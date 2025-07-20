import React, { useState } from 'react'
import './Calculator.css'
import Display from '../Display/Display'
import Buttons from '../Buttons/Buttons'

function Calculator() {
	const [inputValue, setInputValue] = useState('')
	const [answer, setAnswer] = useState('')

	const handleButtonClick = value => {
		if (value === 'DEL') {
			if (answer !== '') {
				setInputValue('')
				setAnswer('')
			} else {
				setInputValue(prev => {
					const functions = ['sqrt', 'sin', 'cos', 'tan', 'log', 'ln']
					for (let func of functions) {
						if (prev.endsWith(func)) {
							return prev.slice(0, -func.length)
						}
					}
					return prev.slice(0, -1)
				})
			}
		} else if (value === '=') {
			try {
				let expression = inputValue
					.replace(/x/g, '*')
					.replace(/÷/g, '/')
					.replace(/,/g, '.')
					.replace(/\^/g, '**')
					.replace(/sqrt/g, 'Math.sqrt')
					.replace(/sin/g, 'Math.sin')
					.replace(/cos/g, 'Math.cos')
					.replace(/tan/g, 'Math.tan')
					.replace(/log/g, 'Math.log10')
					.replace(/ln/g, 'Math.log')
					.replace(/e/g, 'Math.E')
					.replace(/π/g, 'Math.PI')
					.replace(/(\d+(?:\.\d+)?)!/g, 'fact($1)')

				const fact = n => {
					if (n < 0) return NaN
					if (n === 0 || n === 1) return 1
					let res = 1
					for (let i = 2; i <= n; i++) res *= i
					return res
				}

				const result = Function('fact', 'return ' + expression)(fact)
				setAnswer(result.toString())
			} catch {
				setAnswer('Ошибка: некорректное выражение')
			}
		} else {
			if (answer !== '') setAnswer('')

			if (value === 'π') {
				setInputValue(prev => prev + 'π')
			} else if (value === '!') {
				setInputValue(prev => {
					if (/([0-9)]$)/.test(prev)) {
						return prev + '!'
					}
					return prev
				})
			} else {
				setInputValue(prev => prev + value)
			}
		}
	}

	return (
		<div className='calculator'>
			<Display inputValue={inputValue} answer={answer} />
			<Buttons onButtonClick={handleButtonClick} />
		</div>
	)
}

export default Calculator
