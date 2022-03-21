import React, { useState } from 'react'
import './ForgotPassword.css'
import { Button } from '../../components/button/Button'
import { forgotPassword } from '../../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '@mui/material/Alert';

function ForgotPassword(props) {
	const dispatch = useDispatch()
	const initialState = { email: '', redirect: 'http://localhost:3000/reset'}
	const [formData, setFormData] = useState(initialState)

	const state = useSelector(state => {
		return state.authReducer;
	});

	const {loading, authData, errors} = state;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(forgotPassword(formData))
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<div className='loginSignUpContainer'>
			<div className='card'>
				{errors && (<Alert severity="error">{errors}</Alert>)}
				{authData && (<Alert severity="success">{authData.message}</Alert>)}
				<form onSubmit={handleSubmit}>
					<label>Enter your email address</label>
					<input name='email' className='control' type='text' required placeholder='Email address' onChange={handleChange} />
					<section className='submitButton'>
						<Button buttonStyle={'loginBtn'} buttonSize={'largeBtn'} type='submit'>
							Submit
						</Button>
					</section>
				</form>
			</div>
		</div>
	)
}

export default ForgotPassword