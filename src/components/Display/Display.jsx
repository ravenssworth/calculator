import React from 'react'
import './Display.css'

function Display({ inputValue, answer }) {
	return (
		<div className='display'>
			{answer === '' ? (
				<input
					type='text'
					className='display__input'
					placeholder='0'
					maxLength={14}
					value={inputValue}
					readOnly
				/>
			) : (
				<>
					<input
						type='text'
						className='display__value'
						placeholder='0'
						maxLength={14}
						value={answer}
						readOnly
					/>
					<input
						type='text'
						className='display__input'
						placeholder='0'
						maxLength={14}
						value={inputValue}
						readOnly
					/>
				</>
			)}
		</div>
	)
}

export default Display
