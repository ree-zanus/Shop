import React, {useEffect, useState, useContext} from 'react';
import {Navigate, useParams, useNavigate} from 'react-router-dom'
import { Button, Col, Image, Row, Card } from 'react-bootstrap';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { addToBasket, fetchOneDevice, fetchDevices} from '../http/deviceAPI';
import DeviceItem from "../components/DeviceItem";
import { Context } from "../index"; 
import { DEVICE_ROUTE} from '../utils/consts'; 
const swiper = new Swiper('.swiper', {
	modules: [Navigation, Pagination],
	// Optional parameters
		direction: 'horizontal',
		loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// And if we need scrollbar
	slidesPerView: 1,
	autoHeight: true,

}); 
const Main = () => {
	const back = require('../assets/back.jpg'); // with require
	const back1 = require('../assets/back1.jpg'); // with req uire
	const back2 = require('../assets/back2.jpeg'); // with require
	const footer1 = require('../assets/inst.png'); // with require
	const footer2 = require('../assets/ws.png'); // with require
	const footer3 = require('../assets/tl.png'); // with require
	const navigate = useNavigate(); 
	const { device } = useContext(Context);
	useEffect(() => {
		fetchDevices(device.selectedBrand.id, device.page, 4).then(data => {
			device.setDevices(data.rows.slice(0, 4)) // ограничиваем первые 4 элемента
			device.setTotalCount(data.count)
		})
	}, [device.page, device.selectedBrand, device]);
	return (  	
		<div> 
			<>
			<style type="text/css">
				{`
					*,*:before,*:after {
						padding:  0;
						margin: 0;
						border: 0;
						box-sizing: border-box;
					}
					
					html,body {
						height: 100%;
						font-family: 'Italiana', serif;
						background-image: url('../img/wood.jpg');
					}
					
					.wrapper {
						-webkit-background-size:  cover;
						background-size:  cover;
						height: 100%;
						min-width: 0;
					}
					
					.selector-for-some-widget {
						box-sizing: content-box;
					}
					
					/* Основные стили */
					
					.container {
						max-width: 1440px;
						margin: 0px auto;
						padding:  0px 10px;
					}
					
					.header {
						position: fixed;
						width: 100%;
						top:  0;
						left: 0;
						z-index: 50;
						background: #ead0d1;
					}
					
					.header:before {
						content:  '';
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
					
					.header__body {
						position: relative;
						z-index: 2;
						display:  flex;
						justify-content: space-between;
						height:  80px;
						align-items:  center;
					}
					
					.header__logo img {
						width: 80px;
						height: 80px;
					}
					
					.header__burger {
						display: none;
					}
					
					.header__list {
						display:  flex;
					}
					
					.header__list li {
						list-style: none;
						margin: 0px 0px 0px 50px;
					}
					
					.header__link {
						color: #000;
						font-size: 20px;
						text-decoration: none;
						transition: 0.4s;
					}
					
					.header__link:hover {
						color:  #F19CBB;
					}
					
					.header__num {
						color: #000;
						font-size: 18px;
						text-decoration: none;
					}
					
					.main__img {
						height: 650px;
						width: 100%;
						background-image: url('../img/back.jpg');
						background-size: cover;
						background-size: 100% 100%;
					}
					
					
					.list__hit{
						text-align: center;
					}
					
					.list__main {
						text-align: center;
						color: #F19CBB;
					}
					
					
					.footer {
						text-align: left;
						background-color: #ced4da;
					}
					
					ins {
						transition: 0.4s;
					}
					
					ins:hover {
						color: #F19CBB;
					}
					
					form btn:hover {
						background: #F19CBB;
					}
					
					.image-slider {
						padding: 0px 0 35px 0;
					}
					
					.image-slider__image {
						text-align: center;
					}
					
					.image-slider__image img{
						max-width: 100%;
						height: 1000px;
						width: 100%
					}
					
					.image-slider .swiper-button-prev::after, 
					.image-slider .swiper-button-next::after {
						color: #000;
						font-size: 60px;
					}
					
					.image-slider .swiper-pagination-bullet {
						background-color: #000;
					}
					
					.ground {
						background-image: url('../img/red.jpg');
						background-size: cover;
						background-size: 100% 100%;
						min-height: 800px; 
						opacity: 1;
					}
				`}
      	</style>
				<div className="wrapper">   
					
						<div className="image-slider swiper swiper-container swiper">
							<div className="image-slider__wrapper swiper-wrapper">
								<div className="image-slider__slide swiper-slide">
									<div className="image-slider__image">
										<Image src={back2} alt="Картинка"/> 
									</div>
								</div>
								<div className="image-slider__slide swiper-slide">
									<div className="image-slider__image">
										<Image src={back1} alt="Картинка"/>
									</div>
								</div> 
								<div className="image-slider__slide swiper-slide">
									<div className="image-slider__image">
										<Image src={back} alt="Картинка"/>
									</div>
								</div>
								<div className="image-slider__slide swiper-slide">
									<div className="image-slider__image">
										<Image src={back1} alt="Картинка"/>
									</div>
								</div>
								<div className="image-slider__slide swiper-slide">
									<div className="image-slider__image">
										<Image src={back} alt="Картинка"/>
									</div>
								</div>
							</div>
							
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
				
							<div className="swiper-pagination"></div>
						</div>
				<div>
			<div className="container mt-3">
				<h1 className="list__hit">Хиты продаж</h1>
				<Row className="d-flex">
					{device.devices.map((device) => (
						<DeviceItem key={device.id} device={device} />
					))}
				</Row>
			</div>
 
				<section className="contact mt-5">				
						<div className="border border-dark" style={({width: '100%'})}><iframe width="100%" height="500" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D0%BA,%20%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C%D1%8F%D1%81%D0%BA%D0%B0%D1%8F%2014+(Rossmary)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
				</section>

				<section className="footer">
					<div className="container">
						<div className="row">
							<div className="col mt-4">
								<p className="fs-4">Адрес:</p>
								<p className="fs-6 m-0" style={({fontWeight: '800'})}>ООО "Rossmary"</p>
								<p className="fs-6 	m-0" style={({fontWeight: '800'})}>Октябрьская 14</p>
								<p className="fs-6 m-0" style={({fontWeight: '800'})}>8:00-21:00</p>
								<p className="fs-4 mt-3 mb-2">Информация о кондитерской:</p>
								<p className="fs-6 mt-1" style={({fontWeight: '600'})}>
									ООО "Валеолог"
									Адрес регистрации:
									690109, Приморский край, г. Уссурийск, ул. Нейбута д. 30, кв. 206.
									Фактический адрес: 690000, Приморский край, г. Владивосток,
									ул. Светланская 33, строение 2.
									ИНН 253605085073
									ОГРНИП 318253600104031
									от 06.11.2018 г.</p>
							</div>
							<div className="col mt-4">
								<nav className="nav flex-column">
									<a className="hvr nav-link active fs-5 text-dark" aria-current="page" href="#"><ins>Политика конфиденциальности</ins></a>
									<a className="hvr nav-link fs-5 text-dark" href="#"><ins>Обратная связь</ins></a>
									<a className="hvr nav-link fs-5 text-dark" href="#"><ins>Условия доставки и оплаты</ins></a>
									<a className="hvr nav-link fs-5 text-dark" href="#" tabIndex="-1" aria-disabled="true"><ins>Контакты</ins></a>
								</nav>
							</div>
							<div className="col mt-4">
								<p className="fs-4">Подписаться на новости</p>
								<form>
									<div className="form-group row">
									<div className="col-sm-10 row">
										<input type="email" className="form-control" id="example" placeholder="Ваш email" style={({fontWeight: '800'})}/>
										<button type="button" className="btn btn-secondary mt-2" style={({background: '#F19CBB'})}>Подписаться</button>
									</div>
									</div>
								</form> 
							</div> 
						</div>
					</div>
				</section>
			</div>
			</div>
			</>
		</div>
	);
};   
export default Main;