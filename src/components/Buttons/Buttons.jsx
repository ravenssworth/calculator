import { React, useState, useEffect } from 'react'
import './Buttons.css'

function Buttons({ onButtonClick }) {
	const [showLeft, setShowLeft] = useState(window.innerWidth > 550)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 550)

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth <= 550
			setIsMobile(mobile)
			if (mobile) {
				setShowLeft(false)
			} else {
				setShowLeft(true)
			}
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handleClick = value => {
		onButtonClick(value)
	}

	return (
		<div className='buttons'>
			{isMobile && !showLeft && (
				<button
					className='show-left-panel-btn'
					onClick={() => setShowLeft(true)}
				>
					<span>▼</span>
				</button>
			)}
			<div
				className='buttons__grid-left'
				style={{ display: isMobile ? (showLeft ? 'grid' : 'none') : undefined }}
			>
				{isMobile && showLeft && (
					<button
						className='hide-left-panel-btn'
						onClick={() => setShowLeft(false)}
						style={{ gridColumn: '1 / -1' }}
					>
						✖
					</button>
				)}
				<button onClick={() => handleClick('sin')}>sin</button>
				<button onClick={() => handleClick('ln')}>ln</button>
				<button onClick={() => handleClick('cos')}>cos</button>
				<button onClick={() => handleClick('log')}>log</button>
				<button onClick={() => handleClick('tan')}>tan</button>
				<button onClick={() => handleClick('e')}>e</button>
				<button onClick={() => handleClick('π')}>π</button>
				<button onClick={() => handleClick('^')}>^</button>
				<button onClick={() => handleClick('!')}>!</button>
				<button onClick={() => handleClick('sqrt')}>√</button>
			</div>
			<div className='buttons__grid-right'>
				<button
					id='button-1'
					className='button--black'
					onClick={() => handleClick('7')}
				>
					7
				</button>
				<button
					id='button-2'
					className='button--black'
					onClick={() => handleClick('8')}
				>
					8
				</button>
				<button
					id='button-3'
					className='button--black'
					onClick={() => handleClick('9')}
				>
					9
				</button>
				<button
					id='button-4'
					className='button--grey'
					onClick={() => handleClick('÷')}
				>
					÷
				</button>
				<button
					id='button-5'
					className='button--grey'
					onClick={() => handleClick('(')}
				>
					(
				</button>

				<button
					id='button-6'
					className='button--black'
					onClick={() => handleClick('4')}
				>
					4
				</button>
				<button
					id='button-7'
					className='button--black'
					onClick={() => handleClick('5')}
				>
					5
				</button>
				<button
					id='button-8'
					className='button--black'
					onClick={() => handleClick('6')}
				>
					6
				</button>
				<button
					id='button-9'
					className='button--grey'
					onClick={() => handleClick('x')}
				>
					x
				</button>
				<button
					id='button-10'
					className='button--grey'
					onClick={() => handleClick(')')}
				>
					)
				</button>

				<button
					id='button-11'
					className='button--black'
					onClick={() => handleClick('1')}
				>
					1
				</button>
				<button
					id='button-12'
					className='button--black'
					onClick={() => handleClick('2')}
				>
					2
				</button>
				<button
					id='button-13'
					className='button--black'
					onClick={() => handleClick('3')}
				>
					3
				</button>
				<button
					id='button-14'
					className='button--grey'
					onClick={() => handleClick('-')}
				>
					-
				</button>

				<button
					id='button-15'
					className='button--black'
					onClick={() => handleClick('0')}
				>
					0
				</button>
				<button
					id='button-16'
					className='button--black'
					onClick={() => handleClick(',')}
				>
					,
				</button>
				<button
					id='button-17'
					className='button--del'
					onClick={() => handleClick('DEL')}
				>
					DEL
				</button>
				<button
					id='button-18'
					className='button--grey'
					onClick={() => handleClick('+')}
				>
					+
				</button>
				<button
					id='button-19'
					className='button--equal'
					onClick={() => handleClick('=')}
				>
					=
				</button>
			</div>
		</div>
	)
}

export default Buttons
