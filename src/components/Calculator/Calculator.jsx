import React from 'react'
import './Calculator.css'
import Display from '../Display/Display'
import Buttons from '../Buttons/Buttons'

function Calculator() {
	return (
		<div className='calculator'>
			<Display />
			<Buttons />
		</div>
	)
}

export default Calculator
