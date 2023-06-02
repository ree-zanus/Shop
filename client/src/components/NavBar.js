import React, { useContext, useEffect, useState} from 'react';
import DeviceItem from "./DeviceItem";
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Row } from "react-bootstrap";
import { Button, Image } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { MDBCol, MDBIcon } from "mdbreact";

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, MAIN_ROUTE, BASKET_ROUTE, PRIVATE_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
  const logo = require('../assets/logo.png'); // with require
  const { user } = useContext(Context);
  const { device } = useContext(Context);
  const [searchInput, setSearchInput] = useState("");
  const search = require('../assets/glass.png'); // with require

  const navigate = useNavigate();

  useEffect(() => {
	const elasticInput = document.getElementById("elastic");
	elasticInput.addEventListener("input", handleInput);
	return () => elasticInput.removeEventListener("input", handleInput);
 }, []); // вызываем только 1 раз после монтирования компонента

 const handleInput = (event) => {
	setSearchInput(event.target.value.trim());
 };

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setIsAdmin(false);
  };

  return (
	<div>
		<>
	<style type="text/css">
				{`
					.box {
						height: 40px;
						display: flex;
						cursor: pointer;
						padding: 10px 20px;
						background: #fff;
						border-radius: 30px;
						align-items: center;
						box-shadow: 0 10px 25px rgba(0,0,0,0.3);
					}

					.box:hover input {
						width: 250px;
					}

					.box input {
						width: 0;
						outline: none;
						border: none;
						font-weight: 500;
						transition: 0.8s;
						background: transparent;
					}

					.box a .fas {
						color: #1daf;
						font-size: 18px;
					}
					}
				`}
      	</style>
    <Navbar style={{ background: '#ead0d1' }} variant='dark'>
      <Container style={{ fontWeight: 'bold', fontSize: '18px' }}>
        <NavLink style={{ color: 'white' }} to={MAIN_ROUTE}>
          <Image src={logo} width={70} height={70} />
        </NavLink>

        <Nav className='ml-auto'>
				<div className="filters" style={{minHeight: '45px'}}>
					<div className="filters__container _container">
						<div className="filters__search seacrh">
						<div className="search__container">
						<div className="box me-4">
							<input
								type="text"
								placeholder="Поиск ..."
								id="elastic"
								value={searchInput}
								onChange={handleInput}
								style={{borderRaduis: '3px', borderColor: '#dc3545', minHeight: '45px'}}
							/>
							<a href="#">
								<Image src={search} width={30} height={30}/>
								<MDBIcon icon="search" style={{backGround: '#000', height: 10, width: 10}}/>
								<i className="fas fa-search"></i>
							</a>
						</div>
						</div>
						</div>
					</div>
				</div>
			<Nav.Link href={SHOP_ROUTE} style={{ color: 'black' }} to={SHOP_ROUTE}>
				Каталог
			</Nav.Link>
			<Nav.Link href={BASKET_ROUTE} style={{ color: 'black', marginLeft: '20px' }} to={BASKET_ROUTE}>
				Корзина
			</Nav.Link>
			<Nav.Link href={MAIN_ROUTE} style={{ color: 'black', marginLeft: '20px' }} to={BASKET_ROUTE}>
				О нас
			</Nav.Link>

			{user.isAdmin && (
            <Button variant={'outline-dark'} onClick={() => navigate(ADMIN_ROUTE)}>
					Админ панель
            </Button>
			)}  

			{user.isAuth ? (
            <>
				<Nav.Link href={PRIVATE_ROUTE} style={{ color: 'black', marginLeft: '20px'  }} to={PRIVATE_ROUTE}>
					Личный кабинет
				</Nav.Link>
					
				<Nav.Link onClick={() => logOut()} style={{ color: 'black', marginLeft: '20px'  }} to={SHOP_ROUTE}>
					Выйти
				</Nav.Link>
            </>
         ) : (
            <>
				<Nav className='ml-auto' style={{ color: 'white' }}>
					<Nav.Link onClick={() => navigate(LOGIN_ROUTE)} style={{ color: 'black', marginLeft: '20px'  }} to={SHOP_ROUTE}>
						Авторизация
					</Nav.Link>
				</Nav>
            </>
			)}
		</Nav>
      </Container>
	</Navbar>
	</>
	</div>
);	
});

export default NavBar;