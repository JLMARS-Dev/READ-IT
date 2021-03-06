import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'
import Story from '../Stories/Story'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import {useSelector} from 'react-redux';
import {CircularProgress} from '@material-ui/core';

function Carousel() {

	const stories = useSelector((state)=> state.stories);
	const user = JSON.parse(localStorage.getItem('profile'));

	const storyCat1 = stories.filter(story => story.category === user?.result?.categoryOne && story.reports.length === 0);
	const storyCat2 = stories.filter(story => story.category === user?.result?.categoryTwo && story.reports.length === 0);

	const storyCat1Last4 = storyCat1.slice(Math.max(storyCat1.length - 4, 0));
	const storyCat2Last4 = storyCat2.slice(Math.max(storyCat2.length - 4, 0));

	const PrevBtn = (props) => {
		const { className, onClick } = props
		return (
			<div className={className} onClick={onClick}>
				<ArrowBackIosRoundedIcon className='arrows' />
			</div>
		)
	}

	const NextBtn = (props) => {
		const { className, onClick } = props
		return (
			<div className={className} onClick={onClick}>
				<div>
					<ArrowForwardIosRoundedIcon className='arrows' />
				</div>
			</div>
		)
	}

	const properties = {
		dots: true,
		initialSlide: 0,
		slidesToScroll: 4,
		slidesToShow: 4,
		prevArrow: <PrevBtn />,
		nextArrow: <NextBtn />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 926,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false,
				},
			},
			{
				breakpoint: 730,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
				},
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	}

	// const renderInfo = (box, index) => {
	// 	return <img className='img' src={box.image} alt={box.alt} key={index} />
	// }


	/* <Slider autoplay autoplaySpeed={100} dots initialSlide={0} infinite={false}>
	autoplay for autoplay to change the speed in ms 
	just add the prop autoplaySpeed={in ms}
	dots allows you to have small dots down.
	initialSlide={the number of the image you want to start at. 0 to the last image you have}
	infinite false doesnt allow us to loop over when we reach the last image.
*/

	// CustomPaging is basically gonna allow us to change the style of the paging dots.
	// customPaging={(i) => {
	// 	return <div>{i + 1}</div>
	// }}
	// dotsClass='slick-dots CustomizeIndicatior'

	// slidesPerRow={i}, basically gives you the items you want on top of each other.
	// slidesToShow={4} shows multiple items at a time.
	//slidesToScroll={2} allows you to have more items slide whenever you press on the arrows.

	return (
			<div className='main'>
				{!stories.length ? <CircularProgress/> : (
					<>
						{(storyCat1Last4.length + storyCat2Last4.length) >= 4 ?
					<Slider {...properties}>
						{storyCat1Last4.map((story) => (
							<Story key={story._id} story={story}/>
						))}
						{storyCat2Last4.map((story) => (
							<Story key={story._id} story={story}/>
						))}
					</Slider>
					:(
						<div className='cat-container3'>
						{storyCat1Last4.map((story) => (
							<Story key={story._id} story={story}/>
						))}
						{storyCat2Last4.map((story) => (
							<Story key={story._id} story={story}/>
						))}
					</div>
					)}

					</>
				)}
			</div>
	)
}

export default Carousel

