import {$authHost, $host} from "./index";
// import jwt_decode from "jwt-decode";

export const createBrand = async (brand) => {
	const {data} = await $authHost.post('api/brand', brand)
	return data
}

export const fetchBrands = async () => {
	const {data} = await $host.get('api/brand')
	return data
}

export const createDevice = async (device) => {
	const {data} = await $authHost.post('api/device', device)
	return data
}

export const fetchDevices = async (brandId, page, limit=5) => {
	const {data} = await $host.get('api/device', {params: {
		brandId, page, limit
	}})
	return data
}

export const fetchOneDevice = async (id) => {
	const {data} = await $host.get('api/device/' + id)
	return data
}

export const addToBasket = async (deviceId) => {
	const {response} = await $authHost.post('api/basket', deviceId)
	return response
}

export const getBasket = async () => {
	const {data} = await $authHost.get('api/basket')
	return data
}

export const updateBasket = async (basket) => {
	const { data } = await $authHost.put('api/basket', basket);
	return data;
}

