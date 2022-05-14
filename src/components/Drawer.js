import React from 'react';

function Drawer(props) {
	return (
		<div className='overlay'>
			<div className='drawer '>
				<h2 className='d-flex justify-between mb-30'>
					Корзина{''} 
					<img onClick={props.onClose} className='cu-p' src='/img/sneakers/Vector.jpg' alt='Close' />
				</h2>
				<div className='cartItem d-flex align-center mb-20 '>
					<img
						className='removeBtn mr-20'
						width={70}
						height={70}
						src='/img/sneakers/3.jpg'
						alt='sneakers'
					/>
					<div className='mr-20'>
						<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
						<b>12 999 руб.</b>
					</div>
					<img src='/img/sneakers/Vector.jpg' alt='remove' />
				</div>
				<div className='cartItem d-flex align-center mb-20'>
					<img
						className='removeBtn mr-20'
						width={70}
						height={70}
						src='/img/sneakers/13.jpg'
						alt='sneakers'
					/>
					<div className='mr-20'>
						<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
						<b>12 000 руб.</b>
					</div>
					<img src='/img/sneakers/Vector.jpg' alt='remove' />
				</div>
				<div className='cartItem d-flex align-center mb-20'>
					<img
						className='removeBtn mr-20'
						width={70}
						height={70}
						src='/img/sneakers/7.jpg'
						alt='sneakers'
					/>
					<div className='mr-20'>
						<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
						<b>10 999 руб.</b>
					</div>
					<img src='/img/sneakers/Vector.jpg' alt='remove' />
				</div>
				<div className='items'>
					<ul className='cartTotalBlock'>
						<li>
							<span>Итого</span>
							<b>21498 руб.</b>
						</li>
						<li className='d-flex justify-around mb-40'>
							<span>Налог 5%</span>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className='Button'>Оформить заказ</button>
				</div>
			</div>
		</div>
	)
}

export default Drawer;