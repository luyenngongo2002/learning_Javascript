const URL_API = "https://61bc10bed8542f0017824528.mockapi.io/";
const PRODUCTS = 'Products/'
const ACCOUNTS = 'Accounts/'

/**
 * @param {callBack} callBack 
 */
const callBackAPI = (tableName, callBack) => {
	axios(`${URL_API}${tableName}`)
		.then((res) => {
			callBack(res.data)
		})
		.catch((err) => {
			console.log(err);
		});
};

const getData = (tableName, id) => {
	return axios(`${URL_API}${tableName}${id}`)
			.then(result => result.data)
			.catch(err => console.log(err));
};

const postData = (tableName, data) => {
	return axios.post(`${URL_API}${tableName}`, data)
			.catch((err) => {
				console.log(err);
			});
};

const putData = (tableName, id, data) => {
	return axios.put(`${URL_API}${tableName}${id}`, data)
			.catch((err) => {
				console.log(err);
			});
};

const deleteData = (tableName,id) => {
	return axios.delete(`${URL_API}${tableName}${id}`)
		.catch((err) => {
			console.log(err);
		});
};
