const baseURL = 'http://localhost:3000'
// start Display data
let products = []
function getData() {
    axios({
        method: 'get',
        url: `${baseURL}/product`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, result } = response.data
        products = result
        showData()
    }).catch(function (error) {
        console.log(error);
    });
}
getData()
function showData() {
    let cartonna = ``
    console.log(products);
    for (let index = 0; index < products.length; index++) {
        cartonna += `  <tr>
           <td>${products[index].name}</td>
           <td>${products[index].price}</td>
           <td>${products[index].description}</td>
           <td>
           <button onclick='deleteItem(${products[index].id})' class="btn btn-danger">Delete</button>
           <button onclick='updateItem(${products[index].id})' class="btn btn-success">Update</button>
    
           </td>
       </tr>`

    }
    document.getElementById('tbody').innerHTML = cartonna
}
// End Display data

//create product with 
$("#addProduct").click(() => {
    const data = {
        name: $("#name").val(),
        price: $("#price").val(),
        description: $("#description").val(),
        userId: localStorage.getItem("userID")
    }
    console.log(data);

    axios({
        method: 'post',
        url: `${baseURL}/product`,
        data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message } = response.data
        if (message == "Done") {  //Lazem tkon done zy el backEnd
            alert("added success")
            getData()
        } else {
            alert("Fail to add your product")
        }
    }).catch(function (error) {
        console.log(error);
    });
})


//delete product with id
function deleteItem(id){

    axios({
        method: 'delete',
        url: `${baseURL}/product/${id}`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message } = response.data
        if (message == "Done") {
            alert("Deleted successfully")
            getData()
        } else {
            alert("Fail to Delete your product")
        }
    }).catch(function (error) {
        console.log(error);
    });
}
// redirect to update product page
function updateItem(id){
    localStorage.setItem("productID" ,id)  
    window.location.replace("D:/Route Backend Diploma/Week 4/Week 4-20220915T115730Z-001/Week 4/Copy of code-front/frontApi/update.html");   
}
