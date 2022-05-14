import React from 'react'

function Header(props) {
	console.log(props)
	return (
		<header className='d-flex justify-between align-center p-40'>
			<div className='d-flex align-center'>
				<img width={40} height={40} src='/img/logo.png' alt='logo' />
				<div>
					<h3 className='text-uppercase'>REACT SNEAKERS</h3>
					<p className='opacity-5'>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className='d-flex'>
				<li onClick={props.onClickCart} className='mr-30 cu-p'>
					<img width={18} height={18} src='/img/cart.svg' alt='корзина' />
					<span>1205 руб.</span>
				</li>
				<li>
					<img width={18} height={18} src='/img/user.svg' alt='авторизация' />
				</li>
			</ul>
		</header>
	)
}

export default Header
