const URL_API = "https://61bc10bed8542f0017824528.mockapi.io/";
const PRODUCTS = "Products/";
const ACCOUNTS = "Accounts/";

/**
 * @param {callBack} callBack
 */
const callBackAPI = (
	method,
	tableName,
	id = "",
	data = null,
	callBack = null
) => {
	return axios({
		method: method,
		url: `${URL_API}${tableName}${id}`,
		data: data,
	}).then(res => {
        if (callBack !== null) {
			callBack(res.data);
		}
        return;
    }
    )
    .catch(err => console.log(err));
	//axios(`${URL_API}${tableName}`)
	//	.then((res) => {
	//		callBack(res.data);
	//	})
	//	.catch((err) => {
	//		console.log(err);
	//	});
};
const addEle = (ele) => {
	document.getElementById("products").innerHTML += `
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
