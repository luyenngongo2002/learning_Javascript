class Product {
	constructor(img, name, price) {
		this.img = img;
		this.name = name;
		this.price = price;
	}
}
const $ = (id) => {
	return document.getElementById(id);
}