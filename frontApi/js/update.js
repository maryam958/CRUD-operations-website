const baseURL = 'http://localhost:3000'
const productID = localStorage.getItem('productID')
function getProduct() {
    axios({
        method: 'get',
        url: `${baseURL}/product/${localStorage.getItem('productID')}`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, result } = response.data
        console.log(result);
        $('#name').val(result[0].name);
        $('#price').val(result[0].price);
        $('#description').val(result[0].description);
    }).catch(function (error) {
        console.log(error);
    });
}
getProduct()

$("#updateProduct").click(() => {
    const data = {
        name: $('#name').val(),
        price: $('#price').val(),
        description: $('#description').val(),
        userId: localStorage.getItem('userID')
    }
    axios({
        method: "put",
        url: `${baseURL}/product/${productID}`,
        data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }

    }).then((response) => {
        const { message } = response.data;
        console.log(response);
        if (message == 'Done') {
            window.location.replace("D:/Route Backend Diploma/Week 4/Week 4-20220915T115730Z-001/Week 4/Copy of code-front/frontApi/index.html");
        } else {
            alert("In-valid data")
        }
    }).catch((err) => {
        console.log({ message: "Catch error", err });
    })
})