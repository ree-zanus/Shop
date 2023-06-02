import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
	const [brandVisible, setBrandVisible] = useState(false)
	const [deviceVisible, setDeviceVisible] = useState(false)
	return (
		<Container className="d-flex flex-column">
			<Button variant={"outline-dark"} className="mt-4 p-2" 
			onClick={() => setBrandVisible(true)}>
				Добавить категорию
			</Button>
			<Button variant={"outline-dark"} className="mt-4 p-2" 
			onClick={() => setDeviceVisible(true)}>
				Добавить товар
			</Button>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
			<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
		</Container>
	);
};

export default Admin;