import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row, Card} from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import { addToBasket, fetchOneDevice } from '../http/deviceAPI';



const DevicePage = () => {
	const [device, setDevice] = useState({info: []})
	const {id} = useParams()
	useEffect(() => {
		fetchOneDevice(id).then(data => setDevice(data))
	}, [])

const add = () => {
	const formData = new FormData()
	formData.append('deviceId', id)
	addToBasket(formData).then(response => alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`))
}

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
				</Col>
				<Col md={4}>
					<Row>
						<h2>{device.name}</h2>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className="d-flex flex-column align-items-center justify-content-around"
						style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
					>
						<h3>{device.price} руб.</h3>
						<Button variant={"outline-dark"} onClick={add} >Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row className="d-flex flex-column mt-3">
				<h1>Характеристики</h1>
				{device.info.map((info, index) =>
					<Row key={info.id} style={{padding: 10}}>
						{info.title} : {info.description}
					</Row>
					)}
			</Row>
		</Container>
	);
};

export default DevicePage;