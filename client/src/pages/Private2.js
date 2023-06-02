import React, {useContext} from 'react';
import {Routes, Route, useNavigate, navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap';

import { MAIN_ROUTE, PRIVATE_ROUTE, PRIVATE_ROUTE2} from '../utils/consts';


const Private = observer(() => {
	const wood = require('../assets/wood.jpg'); // with require

	const navigate = useNavigate();
	
	return (
		<Container>
			<div className="mt-5" style={{minWidth: '1440px', padding: '100px 50px', backgroundImage: `url(${wood})`, boxShadow: '0 0 5px', paddingTop: '50px', paddingBottom: '100px'}}>
				<h2>Личный кабинет</h2>
				<div style={{background: '#fff', display: 'flex', padding: '15px 15px', boxShadow: '0 3px 10px 2px rgb(0 0 0 / 10%)'}}>
					<Nav>
               	<Button variant={'outline-dark'} onClick={() => navigate(PRIVATE_ROUTE)}>
                  	Мой профиль
               	</Button>
						<Button className="ms-3" variant={'outline-dark'} onClick={() => navigate(PRIVATE_ROUTE2)}>
                  	История заказов
               	</Button>
            	</Nav>
				</div>
				<div className="mt-4" style={{background: '#fff', padding: '15px 15px', boxShadow: '0 3px 10px 2px rgb(0 0 0 / 10%)'}}>
					<p>История заказов пуста</p>
				</div>
			</div>
		</Container>
	);
});

export default Private;