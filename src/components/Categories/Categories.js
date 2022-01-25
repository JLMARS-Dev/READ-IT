import React from 'react'
import './Categories.css'
import '../Line.css'
import { Link } from 'react-router-dom'
const Categories = () => {
	return (
		<div className='category-header'>
			<br></br>
			Categories
			{/* <hr className='line'></hr> */}
			<div className='links-container'>
				<br></br>
				<Link to='/category/Adventure' className='nostyle categories Adventure'>
					Adventure
				</Link>
				<Link to='/category/Horror' className='nostyle categories Horror'>
					Horror
				</Link>
				<Link to='/category/Romance' className='nostyle categories Romance'>
					Romance
				</Link>
				<Link to='/category/Humour' className='nostyle categories Humour'>
					Humour
				</Link>
				<Link to='/category/Nonfiction' className='nostyle categories Non-fiction'>
					Non-fiction
				</Link>
			</div>
		</div>
	)
}

export default Categories
