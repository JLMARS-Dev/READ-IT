import React, { useRef, useState } from 'react'
import '../SignUp/signup.css'
import '../Login/Login.css'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '../../components/button/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../actions/auth'
import FileBase from 'react-file-base64'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'

function SignUp() {
	// const emailRef = useRef();
	// const passwordRef = useRef();
	// const passwordConfirmRef = useRef();
	// const {signup} = useAuth()
	// const [error, setError] = useState('');
	// const [loading, setLoading] = useState(false);

	// async function handleSubmit(e) {
	// 	e.preventDefault();

	// 	if(passwordRef.current.value !== passwordConfirmRef.current.value) {
	// 		return setError('passwords dont match')
	// 	}
	// 	try{
	// 		setError('')
	// 		setLoading(true)
	// 		await signup(emailRef.current.value, passwordRef.current.value);
	// 	} catch{
	// 		setError('Failed to create an account')
	// 	}
	// 	setLoading(false)
	// }

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const initialState = { firstName: '', lastName: '', email: '', password: '', ConfirmPassword: '', categoryOne: '', categoryTwo: ''}
	const [formData, setFormData] = useState(initialState)

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(signup(formData, navigate))
		console.log('signup', formData);
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<div className='loginSignUpContainer'>
			{' '}
			<div className='signCard'>
				<section className='loginContainer'>
					<form onSubmit={handleSubmit}>
						{/* <label>Profile picture</label>
						<FileBase type='file' multiple={false} onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} required /> */}
						<label>First Name</label>
						<input name='firstName' className='control' required placeholder='First Name' onChange={handleChange} />

						<label>Last Name</label>
						<input name='lastName' className='control' required placeholder='Last Name' onChange={handleChange} />

						<label>Email</label>
						<input name='email' className='control' type='email' required placeholder='Email address' onChange={handleChange} />
						<p className='errorMsg'></p>

						<FormControl fullWidth margin='normal'>
							<InputLabel id='demo-simple-select-label'>Favorite Category 1:</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={formData.categoryOne}
								label='Category'
								size='small'
								sx={{ margin: 1 }}
								onChange={(e) => {setFormData({ ...formData, categoryOne: e.target.value }); }}
								required
							>
								<MenuItem value={'Adventure'} className='menuItems'>
									Adventure
								</MenuItem>
								<MenuItem value={'Horror'} className='menuItems'>
									Horror
								</MenuItem>
								<MenuItem value={'Humour'} className='menuItems'>
									Humour
								</MenuItem>
								<MenuItem value={'Non-Fiction'} className='menuItems'>
									Non-Fiction
								</MenuItem>
								<MenuItem value={'Romance'} className='menuItems'>
									Romance
								</MenuItem>
							</Select>
						</FormControl>


						<FormControl fullWidth margin='normal'>
							<InputLabel id='demo-simple-select-label'>Favorite Category 2:</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={formData.categoryTwo}
								label='Category'
								size='small'
								sx={{ margin: 1 }}
								onChange={(e) => {setFormData({ ...formData, categoryTwo: e.target.value }); }}
								required
							>
								<MenuItem value={'Adventure'} className='menuItems'>
									Adventure
								</MenuItem>
								<MenuItem value={'Horror'} className='menuItems'>
									Horror
								</MenuItem>
								<MenuItem value={'Humour'} className='menuItems'>
									Humour
								</MenuItem>
								<MenuItem value={'Non-Fiction'} className='menuItems'>
									Non-Fiction
								</MenuItem>
								<MenuItem value={'Romance'} className='menuItems'>
									Romance
								</MenuItem>
							</Select>
						</FormControl>

						<label>Password</label>
						<input name='password' className='control' placeholder='Password' type='password' required onChange={handleChange} />
						<p className='errorMsg'></p>

						<label>Confirm Password</label>
						<input
							name='ConfirmPassword'
							className='control'
							placeholder='Confirm Password'
							type='password'
							required
							onChange={handleChange}
						/>
						<p className='errorMsg'></p>

						<section className='signupBtn'>
							<Button type='submit' buttonStyle={'loginBtn'} buttonSize={'largeBtn'}>
								Signup
							</Button>
						</section>
						<div className='SignmsgContainer'>
							<p className='msg'>You're a member? </p>
							<Link className='linkText' to='/login' style={{ textDecoration: 'none' }}>
								Login
							</Link>
						</div>
					</form>
				</section>
			</div>
		</div>
	)
}

export default SignUp
