import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { getBasket, updateBasket } from '../http/deviceAPI';
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
const Basket = observer(() => {
 const {device} = useContext(Context)
 useEffect(() => {
  getBasket().then(data => device.setBaskets(data))
 }, [device])
 let prices = 0;
 {device.basket.map(price => {
 prices += Number(price.device.price);
 })}
 return (
  <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3">
            <h1 className="pb-2" style={{fontSize: 36}}>Корзина</h1>
            <Card className="d-flex flex-row p-2 justify-content-between align-items-center mb-2">
     <h1 className="pr-2" style={{fontSize: 30}}>Итого:</h1>
     <h3 className="pl-2" style={{fontSize: 24}}>{prices}<span className="font-weight-light pl-2">рублей</span></h3>
            </Card>
				{device.basket.map(product =>
  <Card className="d-flex w-100 p-2 justify-content-center mb-2 mt-3" key={product.id}>
    <Row className="d-flex w-100">
      <Col>
        <div className="d-flex flex-row align-items-center">
          <Image src={process.env.REACT_APP_API_URL + product.device.img} width={175} height={150} />
          <h1 className="pl-3 ms-5" style={{fontSize: 24}}>{product.device.name}</h1>
        </div>
      </Col>
      <Col>
        <div className="d-flex h-100 flex-row justify-content-end align-items-center">
          <h2 className="font-weight-light" style={{fontSize: 24}}>{product.device.price} рублей</h2>
          <p className="ml-3 mr-3 font-weight-light" style={{fontSize: 18}}>{product.count} шт.</p>
        </div>
      </Col>
    </Row>
  </Card>
)}
  </Container>
 );
});
export default Basket;