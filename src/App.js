import React, { useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
	{
		title: 'Мужские Кроссовки  Blazer Mid Suede',
		price: 12999,
		imageUrl: '/img/sneakers/11.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8499,
		imageUrl: '/img/sneakers/12.jpg',
	},
	{
		title: 'Кроссовки Puma Aka Boku Future Rider',
		price: 8999,
		imageUrl: '/img/sneakers/13.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8999,
		imageUrl: '/img/sneakers/10.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12435,
		imageUrl: '/img/sneakers/11.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8099,
		imageUrl: '/img/sneakers/12.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 5999,
		imageUrl: '/img/sneakers/13.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 4449,
		imageUrl: '/img/sneakers/10.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 6999,
		imageUrl: '/img/sneakers/11.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 4499,
		imageUrl: '/img/sneakers/12.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 6999,
		imageUrl: '/img/sneakers/13.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 4569,
		imageUrl: '/img/sneakers/10.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12999,
		imageUrl: '/img/sneakers/11.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8499,
		imageUrl: '/img/sneakers/12.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 1999,
		imageUrl: '/img/sneakers/13.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 10000,
		imageUrl: '/img/sneakers/10.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 5679,
		imageUrl: '/img/sneakers/11.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 3499,
		imageUrl: '/img/sneakers/12.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 7999,
		imageUrl: '/img/sneakers/13.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 2299,
		imageUrl: '/img/sneakers/10.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 11999,
		imageUrl: '/img/sneakers/11.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 3499,
		imageUrl: '/img/sneakers/12.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8599,
		imageUrl: '/img/sneakers/13.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8669,
		imageUrl: '/img/sneakers/10.jpg',
	},
]

function App(props) {
	const [cartItems, setCartItems] = useState([])
	const [cartOpened, setCartOpened] = useState(false)
	const onAddToCart = obj => {
		setCartItems(prev => [...prev, obj])
	}
	return (
		<div className='wrapper clear '>
			{cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<div className='content p-40'>
				<div className='cont d-flex align-center justify-between mb '>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='../img/sneakers/search.svg' alt='Search' />
						<input placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-wrap'>
					{arr.map(obj => (
						<Card
							title={obj.title}
							price={obj.price}
							imageUrl={obj.imageUrl}
							onFavorite={() => console.log('Добавили в закладки')}
							onPlus={() => console.log('нажали плюс')}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
export default App
