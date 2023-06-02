import React, {useContext, useState} from 'react';
import {Container, Form, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
	const {user} = useContext(Context)
	const location = useLocation()
	const navigate = useNavigate()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(email, password);
			}
			user.setUser(data)
			user.setIsAuth(true)
			if (email === "user1@mail.ru"){
				user.setIsAdmin(true)
			}
			navigate(MAIN_ROUTE)
		} catch (e) {
			alert(e.response.data.message)
		}
		
	}

	return (
		<Container 
			className="d-flex justify-content-center align-items-center"
			style={{height: window.innerHeight - 54}}
		>
			<Card style={{width: 650, borderColor: '#ead0d1', borderWidth: '3px'}} className="p-5 outline-success">
				<h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						className="mt-3"
						placeholder="Введите ваш email..."
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Form.Control
						className="mt-3"
						placeholder="Введите ваш пароль..."
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
					/>
					<Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
						{isLogin ?
							<div>
								Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
							</div>
							:
							<div>
								Есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
							</div>
						}
						<Button
							variant={"outline-success"}
							onClick={click}
							className="mt-3"
						>
							{isLogin ? 'Войти' : 'Регистрация'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	);
});

export default Auth;