import { useState, useEffect, useContext } from "react";
import DeviceItem from "./DeviceItem";
import { Row } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const DeviceList = observer(() => {
	const { device } = useContext(Context);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		const elasticInput = document.getElementById("elastic");
		elasticInput.addEventListener("input", handleInput);
		return () => elasticInput.removeEventListener("input", handleInput);
	}, []); // вызываем только 1 раз после монтирования компонента

	const handleInput = (event) => {
		setSearchInput(event.target.value.trim());
	};

return (
	<>
      <Row className="d-flex">
			{device.devices
			.filter(
            (device) =>
					!searchInput ||
					device.name.toLowerCase().includes(searchInput.toLowerCase())
			)
			.map((device) => (
            <DeviceItem key={device.id} device={device} />
			))}
      </Row>
	</>
	);
});

export default DeviceList;

