// SHAS METHODS Script


// Cart System

let cartCount = 0;


const cartButtons = document.querySelectorAll(".cart");


cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        alert("Product added to cart 🛒 Total items: " + cartCount);

    });

});




// Buy Now Button


const buyButtons = document.querySelectorAll(".product-card button:not(.cart)");


buyButtons.forEach(button => {


    button.addEventListener("click", () => {


        let productName = 
        button.parentElement.querySelector("h3").innerText;


        let message = 
        "Hello SHAS METHODS, I want to order: " + productName;


        let whatsapp =
        "https://wa.me/7305771363?text=" 
        + encodeURIComponent(message);


        window.open(whatsapp, "_blank");


    });


});





// Smooth Scroll


document.querySelectorAll("a[href^='#']").forEach(anchor => {


    anchor.addEventListener("click", function(e){


        e.preventDefault();


        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});
