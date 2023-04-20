// import BatmanBegins from '../../assets/batman_begins.jpg'
// import Dune from '../../assets/dune.jpg'
// import Sing2 from '../../assets/sing_2.jpg'
// import SpiderMan from '../../assets/spider_man.jpg'
// import TDKRises from '../../assets/the_dark_knight_rises.jpg'
// import TDK from '../../assets/the_dark_knight.jpg'

export interface Movie {
	src: string
	title: string
	main: string
	runtime: string
}

export const moviesData: Movie[] = [
	{
		src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/batman_begins.jpg',
		title: 'Batman Begins',
		main: 'Christian Bale',
		runtime: '120m'
	},
	{ src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/batman_begins.jpg', title: 'Dune', main: 'Timothée Chalamet', runtime: '120m' },
	{ src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/batman_begins.jpg', title: 'Sing 2', main: 'Matthew McConaughey', runtime: '120m' },
	{
		src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/batman_begins.jpg',
		title: 'Spider-Man: No Way Home',
		main: 'Tom Holland',
		runtime: '120m'
	},
	{
		src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/batman_begins.jpg',
		title: 'The Dark Knight Rises',
		main: 'Christian Bale',
		runtime: '120m'
	},
	{
		src: 'https://raw.githubusercontent.com/lpredrum136/react-tailwind-crash-tutorial/master/src/assets/batman_begins.jpg',
		title: 'The Dark Knight',
		main: 'Christian Bale',
		runtime: '120m'
	}
]