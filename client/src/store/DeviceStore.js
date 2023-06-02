import {makeAutoObservable} from "mobx";

export default class DeviceStore {
 constructor() {
  this._brands = []
  this._devices = []
  this._baskets = []
  this._selectedType = {}
  this._selectedBrand = {}
  this._page = 1
  this._totalCount = 0
  this._limit = 2
  makeAutoObservable(this)
 }
 setBrands(brands) {
  this._brands = brands
 }
 setDevices(devices) {
  this._devices = devices
 }
setBaskets(baskets) {
  this._baskets = baskets.map(el => ({ device: el.device, count: el.count }));
}
 setSelectedBrand(brand) {
  this._selectedBrand = brand
 }
 setPage(page) {
  this._page = page
 }
 setTotalCount(count) {
  this._totalCount = count
 }
 
 get brands() {
  return this._brands
 }
 get devices() {
  return this._devices
 }
 get basket() {
  return this._baskets
 }
 get selectedType() {
  return this._selectedType
 }
 get selectedBrand() {
  this.setPage(1)
  return this._selectedBrand
 }
 get totalCount() {
  return this._totalCount
 }
 get page() {
  return this._page
 }
 get limit() {
  return this._limit
 }
}