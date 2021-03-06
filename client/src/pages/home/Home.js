import Recommended from '../../components/Recommended/Recommended'
import Categories from '../../components/Categories/Categories'
import Write from '../../components/Write/Write'
import Container from '../../components/container/container'
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getStories} from '../../actions/stories';
import NavBar from '../../components/navbar/NavBar';
import Search from '../../components/Search/Search';
import { useNavigate } from 'react-router-dom';
import {getUsers} from '../../actions/auth';
function Home({ handleLogout }) {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('profile'));

	useEffect(() => {
		if(!user) navigate('/')
	}, [])
	
	useEffect(() => {
		dispatch(getStories());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<Container nav={<NavBar/>} contentClass='content'>
			<Search/>
			<Recommended />
			<Categories />
			<Write />
		</Container>
	)
}

export default Home
