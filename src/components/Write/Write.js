import React from 'react'
import './Write.css'
import '../Line.css'
import { Link } from 'react-router-dom'
const Write = () => {
	return (
		<div className='write-header'>
			<br></br>
			Write
			{/* <hr className='line'></hr> */}
			<div className='write-container'>
				<Link to='/Create' className='nostyle write Create'>
					Create a Lobby
				</Link>
				<Link to='/Join' className='nostyle write Join'>
					Join a Lobby
				</Link>
			</div>
		</div>
	)
}

export default Write
