import { React } from 'react'
import './Buttons.css'

function Buttons() {
	return (
		<div className='buttons'>
			<button className='button--black'>7</button>
			<button className='button--black'>8</button>
			<button className='button--black'>9</button>
			<button className='button--grey'>÷</button>
			<button className='button--grey'>(</button>
			<button className='button--black'>4</button>
			<button className='button--black'>5</button>
			<button className='button--black'>6</button>
			<button className='button--grey'>x</button>
			<button className='button--grey'>)</button>
			<button className='button--black'>1</button>
			<button className='button--black'>2</button>
			<button className='button--black'>3</button>
			<button className='button--grey'>-</button>
			<button className='button--black'>0</button>
			<button className='button--black'>,</button>
			<button className='button--del'>DEL</button>
			<button className='button--grey'>+</button>
			<button className='button--equal'>=</button>
		</div>
	)
}

export default Buttons
