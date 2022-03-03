const addProduct = async () => {
	var img = $("link-img").value;
	var name = $("product-name").value;
	var price = parseInt($("price").value);

	var product = new Product(img, name, price);
	postProduct(product);
};
const displayMEdit = (id) => {
	getProduct(id).then((ele) => {
		$("edit-link").value = ele.img;
		$("edit-product-name").value = ele.name;
		$("edit-price").value = ele.price;
		$("btn-save-edit").setAttribute("onclick", `saveEdit(${ele.id})`);
	});
};
const saveEdit = (id) => {
	getProduct(id).then((ele) => {
		ele.img = $("edit-link").value;
		ele.name = $("edit-product-name").value;
		ele.price = parseInt($("edit-price").value);
		putProduct(id, ele);
		console.log("edited");
	});
};
const addEle = (ele) => {
	$("tbl-body").innerHTML += `
        <tr>
            <th scope='row'>${ele.id}</th>
            <td><img src='${ele.img}' class='img-fluid' width='100px'></td>
            <td>${ele.name}</td>
            <td>${ele.price}</td>
            <td>
                <button class='btn btn-danger text-light' 
                    type='button' onclick='deleteProduct(${ele.id})'>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button class='btn btn-danger text-light' type='button' 
                    onclick='displayMEdit(${ele.id})' 
					data-bs-toggle='modal' data-bs-target='#mEditProduct'>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
            </td>    
        </tr>
    `;
};
const displayAll = (productArr) => {
	productArr.forEach((ele) => {
		addEle(ele);
	});
};

callBackAPI(PRODUCTS, displayAll);
