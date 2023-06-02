import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
	const navigate = useNavigate()
	return (
		<Col md={3} className={"mt-5 elastic text-center"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}> 
			<Card style={{width: 252, cursor: 'pointer'}} className={"ms-5"} border={"light"}>
				<Image width={250} height={200} src={process.env.REACT_APP_API_URL + device.img}/>
				<div className=" mt-1 justify-content-between align-items-center">
					<div>{device.name}</div>
					<div>{device.price} руб.</div>
					<hr></hr>
				</div>
			</Card>
		</Col>
	);
};



export default DeviceItem;