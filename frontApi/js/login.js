const baseURL = 'http://localhost:3000'

$("#signin").click(() => {
    const email = $("#email").val();
    const password = $("#password").val();
    const data = {
        email,
        password
    }
console.log({data});
    axios({
        method: 'post',
        url: `${baseURL}/signin`,
        data: data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        console.log({ response });
        const { message, result } = response.data
        if (message == "Done") {
            localStorage.setItem('userID', result[0].id);
            window.location.replace("D:/Route Backend Diploma/Week 4/Week 4-20220915T115730Z-001/Week 4/Copy of code-front/frontApi/index.html");
        } else {
            // console.log("In-valid email or password");
            // alert("In-valid email or password")
            alert(message)
        }
    }).catch(function (error) {
        console.log(error);
    });

})






