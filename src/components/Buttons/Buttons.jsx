import { React } from 'react'
import './Buttons.css'

function Buttons({ onButtonClick }) {
	const handleClick = value => {
		onButtonClick(value)
	}

	return (
		<div className='buttons'>
			<button className='button--black' onClick={() => handleClick('7')}>
				7
			</button>
			<button className='button--black' onClick={() => handleClick('8')}>
				8
			</button>
			<button className='button--black' onClick={() => handleClick('9')}>
				9
			</button>
			<button className='button--grey' onClick={() => handleClick('÷')}>
				÷
			</button>
			<button className='button--grey' onClick={() => handleClick('(')}>
				(
			</button>
			<button className='button--black' onClick={() => handleClick('4')}>
				4
			</button>
			<button className='button--black' onClick={() => handleClick('5')}>
				5
			</button>
			<button className='button--black' onClick={() => handleClick('6')}>
				6
			</button>
			<button className='button--grey' onClick={() => handleClick('x')}>
				x
			</button>
			<button className='button--grey' onClick={() => handleClick(')')}>
				)
			</button>
			<button className='button--black' onClick={() => handleClick('1')}>
				1
			</button>
			<button className='button--black' onClick={() => handleClick('2')}>
				2
			</button>
			<button className='button--black' onClick={() => handleClick('3')}>
				3
			</button>
			<button className='button--grey' onClick={() => handleClick('-')}>
				-
			</button>
			<button className='button--black' onClick={() => handleClick('0')}>
				0
			</button>
			<button className='button--black' onClick={() => handleClick(',')}>
				,
			</button>
			<button className='button--del' onClick={() => handleClick('DEL')}>
				DEL
			</button>
			<button className='button--grey' onClick={() => handleClick('+')}>
				+
			</button>
			<button className='button--equal' onClick={() => handleClick('=')}>
				=
			</button>
		</div>
	)
}

export default Buttons
