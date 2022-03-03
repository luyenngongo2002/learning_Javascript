const addEle = (ele) => {
	$("products").innerHTML += `
        <div class="product" id="${"product-" + ele.id}">
            <img class="product-img" src="${ele.img}"><br>
            <h2 class="product-title mt-3">${ele.name}</h2>
            <h3 class="price">$ ${ele.price}</h3>
            <button class="btn btn-outline-danger mt-3" type="button">Add to cart</button>
        </div>
    `;
};
const displayAll = (productArr) => {
	productArr.forEach((ele) => {
		addEle(ele);
	});
};

callBackAPI(PRODUCTS, displayAll);
