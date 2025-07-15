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
				setInputValue(prev => prev.slice(0, -1))
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

				const result = eval(expression)
				setAnswer(result.toString())
			} catch {
				setAnswer('Ошибка: некорректное выражение')
			}
		} else {
			if (answer !== '') setAnswer('')
			setInputValue(prev => prev + value)
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
