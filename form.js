let buyerAndSellersPage = document.getElementById("buyer-seller")
let transportationPage = document.getElementById("transportationForm")
let manfacturePage = document.getElementById("manfucturePage")
let manfacturePage1 = document.getElementById("manfucturePage1")
let manfacturePage2 = document.getElementById("manfucturePage2")
let inventoryPage = document.getElementById("inventoryForm")



let transportation = document.getElementById("Transportation")
let buyer = document.getElementById("Buyer")
let seller = document.getElementById("Seller")
let manfacturingbox = document.getElementById("Manfacturing")
let manfuctureSub = document.getElementById("manfucturesub")
let manfucturingsub = document.getElementById("manfucturingsub")
let invetoryBox = document.getElementById("Inventory")

let supplyChain = document.getElementById("SupplyChain")




let signUpForm = document.getElementById("signup")
let loginForm = document.getElementById("loginformm")
let signUpBtn = document.getElementById("signUpBtn")
let signInBtn = document.getElementById("signInBtn")


buyer.addEventListener("click", function () {

    buyerAndSellersPage.classList.replace("d-none", "d-block")
    transportationPage.classList.replace("d-block", "d-none")
    manfacturePage.classList.replace("d-block", "d-none")
    inventoryPage.classList.replace("d-block", "d-none")


})

seller.addEventListener("click", function () {


    buyerAndSellersPage.classList.replace("d-none", "d-block")
    transportationPage.classList.replace("d-block", "d-none")
    manfacturePage.classList.replace("d-block", "d-none")
    inventoryPage.classList.replace("d-block", "d-none")



})

manfacturingbox.addEventListener("click", function () {

    buyerAndSellersPage.classList.replace("d-block", "d-none")
    transportationPage.classList.replace("d-block", "d-none")
    manfacturePage.classList.replace("d-none", "d-block")
    manfacturePage1.classList.replace("d-block", "d-none")
    manfacturePage2.classList.replace("d-block", "d-none")
    inventoryPage.classList.replace("d-block", "d-none")

})

manfuctureSub.addEventListener("click", function () {

    buyerAndSellersPage.classList.replace("d-block", "d-none")
    transportationPage.classList.replace("d-block", "d-none")
    manfacturePage1.classList.replace("d-none", "d-block")
    manfacturePage2.classList.replace("d-block", "d-none")
    inventoryPage.classList.replace("d-block", "d-none")




})

manfucturingsub.addEventListener("click", function () {

    buyerAndSellersPage.classList.replace("d-block", "d-none")
    transportationPage.classList.replace("d-block", "d-none")
    manfacturePage1.classList.replace("d-block", "d-none")
    manfacturePage2.classList.replace("d-none", "d-block")
    inventoryPage.classList.replace("d-block", "d-none")




})


transportation.addEventListener("click", function () {


    buyerAndSellersPage.classList.replace("d-block", "d-none")
    transportationPage.classList.replace("d-none", "d-block")
    manfacturePage.classList.replace("d-block", "d-none")
    manfacturePage1.classList.replace("d-block", "d-none")
    manfacturePage2.classList.replace("d-block", "d-none")
    inventoryPage.classList.replace("d-block", "d-none")



})


invetoryBox.addEventListener("click", function () {

    buyerAndSellersPage.classList.replace("d-block", "d-none")
    transportationPage.classList.replace("d-block", "d-d-none")
    manfacturePage.classList.replace("d-block", "d-none")
    manfacturePage1.classList.replace("d-block", "d-none")
    manfacturePage2.classList.replace("d-block", "d-none")
    inventoryPage.classList.replace("d-none", "d-block")


})


signUpBtn.addEventListener("click", function () {
    signUpForm.classList.replace("d-none", "d-block")
    loginForm.classList.replace("d-block", "d-none")
    console.log(signInBtn);
    signInBtn.classList.replace("d-none", "d-block")

})


signInBtn.addEventListener("click", function () {

    signUpForm.classList.replace("d-block", "d-none")
    loginForm.classList.replace("d-none", "d-block")
    signInBtn.classList.replace("d-block", "d-none")

})



supplyChain.addEventListener("click", function () {

    buyerAndSellersPage.classList.replace("d-block", "d-none")
    transportationPage.classList.replace("d-block", "d-none")
    manfacturePage.classList.replace("d-block", "d-none")
    manfacturePage1.classList.replace("d-block", "d-none")
    manfacturePage2.classList.replace("d-block", "d-none")
    inventoryPage.classList.replace("d-block", "d-none")


})







