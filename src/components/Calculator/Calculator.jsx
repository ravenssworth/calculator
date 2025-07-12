import React, { useState } from 'react'
import './Calculator.css'
import Display from '../Display/Display'
import Buttons from '../Buttons/Buttons'

function Calculator() {
	const [inputValue, setInputValue] = useState('')
	const [answer, setAnswer] = useState('')

	const handleButtonClick = value => {
		if (value === 'DEL') {
			setInputValue(prev => prev.slice(0, -1))
		} else if (value === '=') {
			try {
				const expression = inputValue
					.replace(/x/g, '*')
					.replace(/÷/g, '/')
					.replace(/,/g, '.')
				const result = eval(expression)
				setAnswer(result.toString())
			} catch {
				setAnswer('Ошибка: некорректное выражение')
			}
		} else {
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
