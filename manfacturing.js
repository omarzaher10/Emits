let newProduct = document.getElementById("NewProduct")
let massages = document.getElementById("Massages")
let logOutBtn = document.getElementById('logOutBtn')



let newProductPage = document.getElementById("newProductPage")
let massagePage = document.getElementById("massagesPage")


massages.addEventListener("click", function () {

    newProductPage.classList.replace("d-block", "d-none")
    massagePage.classList.replace("d-none", "d-block")



})


newProduct.addEventListener("click", function () {

    massagePage.classList.replace("d-block", "d-none")
    newProductPage.classList.replace("d-none", "d-block")


})



