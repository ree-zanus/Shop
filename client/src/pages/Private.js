import React, {useContext} from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap';

import { MAIN_ROUTE, PRIVATE_ROUTE2} from '../utils/consts';


const Private = observer(() => {
	const wood = require('../assets/wood.jpg'); // with require
	
	const navigate = useNavigate();
	
	return (
		<Container>
			<div className="mt-5" style={{minWidth: '1440px', padding: '100px 50px', backgroundImage: 'url(' + wood + ')', boxShadow: '0 0 5px', paddingTop: '50px', paddingBottom: '100px'}}>
				<h2>Личный кабинет</h2>
				<div style={{background: '#fff', display: 'flex', padding: '15px 15px', boxShadow: '0 3px 10px 2px rgb(0 0 0 / 10%)'}}>
					<Nav>
               	<Button variant={'outline-dark'} onClick={() => navigate(MAIN_ROUTE)}>
                  	Мой профиль
               	</Button>
						<Button className="ms-3" variant={'outline-dark'} onClick={() => navigate(PRIVATE_ROUTE2)}>
                  	История заказов
               	</Button>
            	</Nav>
				</div>
				<div className="mt-4" style={{background: '#fff', padding: '15px 15px', boxShadow: '0 3px 10px 2px rgb(0 0 0 / 10%)'}}>
					<h4>Данные профиля:</h4>
					<Row>
						<Col md={3}><p>Представьтесь, пожалуйста</p> <input placeholder='Ваше имя' style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none'}}/></Col>
						<Col md={3}><p>Ваш email</p> <input placeholder='Ваш email' style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none'}}/></Col>
						<Col md={2}><p>Телефон</p> <input placeholder='Ваш телефон' style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none', maxWidth: '150px'}}/></Col>
						<Col md={2}><p>Пароль</p> <input placeholder='Ваш пароль' style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none', maxWidth: '150px'}}/></Col>
						<Col md={2}><p>Дата рождения</p> <input type="date" style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none', maxWidth: '150px'}}/></Col>
					</Row>
					<Button className="mt-3" variant={'outline-dark'} onClick={() => navigate(MAIN_ROUTE)}>
						История заказов
					</Button>
				</div>
					
				<div style={{background: '#fff', padding: '15px 15px', boxShadow: '0 3px 10px 2px rgb(0 0 0 / 10%)'}}>
					<h4 className="mt-3" >Адрес доставки: </h4>
					<Row>
						<Col md={3}><p>Город</p> <input placeholder='Введите город' style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none'}}/></Col>
						<Col md={3}><p>Улица</p> <input placeholder='Введите улицу' style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none'}}/></Col>
						<Col md={2}><p>Дом</p> <input placeholder='Дом' style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none', maxWidth: '150px'}}/></Col>
						<Col md={2}><p>Корпус</p> <input placeholder='Кор' style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none', maxWidth: '150px'}}/></Col>
						<Col md={2}><p>Кв.</p> <input placeholder='Кв.' style={{border: '1px solid #d2cdc4', padding: '10px 10px 10px 10px', borderRadius: '15px', outline: 'none', maxWidth: '100px'}}/></Col>
					</Row>
					<Button className="mt-3" variant={'outline-dark'} onClick={() => navigate(PRIVATE_ROUTE2)}>
						Сохранить
					</Button>
				</div>
			</div>
		</Container>
	);
});

export default Private;