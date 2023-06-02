import React, { useContext, useEffect } from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import {fetchBrands, fetchDevices } from "../http/deviceAPI";
import { Context } from "../index";
import Pages from '../components/Pages';

const Shop = observer(() => {
	const {device} = useContext(Context)

	useEffect(() => {
		fetchBrands().then(data => device.setBrands(data))
	}, [device])

	useEffect(() => {
		fetchDevices(device.selectedBrand.id, device.page, 12).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [device.page, device.selectedBrand, device])

	return (
		<Container> 
			<Row className="mt-2">	
					<Col md={12}>
						<BrandBar/>
						<DeviceList/>
						<Pages/>
					</Col>
			</Row>
      </Container>
	);
});

export default Shop;