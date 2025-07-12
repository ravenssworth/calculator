import React from 'react'
import './Display.css'

function Display() {
	const answer = ''
	return (
		<div className='display'>
			{answer === '' ? (
				<input
					type='text'
					className='display__input'
					placeholder='0'
					maxLength={14}
				/>
			) : (
				<>
					<input
						type='text'
						className='display__input'
						placeholder='0'
						maxLength={14}
						disabled
					/>

					<input
						type='text'
						className='display__value'
						placeholder='0'
						maxLength={14}
					/>
				</>
			)}
		</div>
	)
}

export default Display
