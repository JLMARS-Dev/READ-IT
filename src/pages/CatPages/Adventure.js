import Container from '../../components/container/Container'
import TBox from '../../components/Boxes/TBox'
import './Cat.css'

function Adventure() {
	const boxInfo = [
		{ image: '/images/universe.png', to: { pathname: '/home' }, name: 'Universe and I', alt: 'first pic' },
		{ image: '/images/roses.png', to: { pathname: '/home' }, name: 'Roses and Guns', alt: 'second pic' },
		{ image: '/images/way.png', to: { pathname: '/home' }, name: 'The way back home', alt: 'third pic' },
		{ image: '/images/abracadabra.png', to: { pathname: '' }, name: 'Abracadabra', alt: 'fourth pic' },
		{ image: '/images/universe.png', to: { pathname: '/home' }, name: 'Universe and I', alt: 'first pic' },
		{ image: '/images/universe.png', to: { pathname: '/home' }, name: 'Universe and I', alt: 'first pic' },
		{ image: '/images/roses.png', to: { pathname: '/home' }, name: 'Roses and Guns', alt: 'second pic' },
		{ image: '/images/way.png', to: { pathname: '/home' }, name: 'The way back home', alt: 'third pic' },
		{ image: '/images/abracadabra.png', to: { pathname: '' }, name: 'Abracadabra', alt: 'fourth pic' },
		{ image: '/images/universe.png', to: { pathname: '/home' }, name: 'Universe and I', alt: 'first pic' },
		{ image: '/images/universe.png', to: { pathname: '/home' }, name: 'Universe and I', alt: 'first pic' },
		{ image: '/images/roses.png', to: { pathname: '/home' }, name: 'Roses and Guns', alt: 'second pic' },
		{ image: '/images/way.png', to: { pathname: '/home' }, name: 'The way back home', alt: 'third pic' },
		{ image: '/images/abracadabra.png', to: { pathname: '' }, name: 'Abracadabra', alt: 'fourth pic' },
	]

	return (
		<Container>
			<h1>Adventure</h1>
			<div className='cat-container'>
				{boxInfo.map((box, index) => (
					<TBox key={index} img={box.image} to={box.to} name={box.name} />
				))}
			</div>
		</Container>
	)
}

export default Adventure

// const styles = {
//   tabs: {
//     background: '#fff',
//   },
//   slide: {
//     padding: 15,
//     minHeight: 100,
//     color: '#fff',
//   },
//   slide1: {
//     backgroundColor: '#FEA900',
//   },
//   slide2: {
//     backgroundColor: '#B3DC4A',
//   },
//   slide3: {
//     backgroundColor: '#6AC0FF',
//   },
// };

// class Adventure extends React.Component {
//   state = {
//     index: 0,
//   };

//   handleChange = (event, value) => {
//     this.setState({
//       index: value,
//     });
//   };

//   handleChangeIndex = index => {
//     this.setState({
//       index,
//     });
//   };

//   render() {
//     const { index } = this.state;

//     return (
//       <div>
//         <Tabs value={index} fullWidth centered onChange={this.handleChange} style={styles.tabs}>
//           <Tab label="tab n°1" />
//           <Tab label="tab n°2" />
//           <Tab label="tab n°3" />
//         </Tabs>
//         <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} enableMouseEvents>
//           <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
//           <div style={Object.assign({}, styles.slide, styles.slide2)}>
//             slide n°2
//             <Select value={10} autoWidth={false}>
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Ten</MenuItem>
//             </Select>
//           </div>
//           <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
//         </SwipeableViews>
//       </div>
//     );
//   }
// }

// export default Adventure
