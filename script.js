// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Menu click karne ke baad close

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ================= PRODUCT FILTER =================

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function (product) {

        const productCategory =
            product.getAttribute("data-category");


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.classList.remove("hide");

        } else {

            product.classList.add("hide");

        }

    });

}


// ================= CATEGORY CLICK =================

function showCategory(category) {

    filterProducts(category);


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= PRODUCT ENQUIRY =================

function enquireProduct(productName) {

    document
        .getElementById("requirement")
        .value = productName;


    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const phone =
        document.getElementById("phone").value;


    const requirement =
        document.getElementById("requirement").value;


    const message =
        document.getElementById("message").value;


    if (name === "" || phone === "") {

        alert("Please enter your Name and Mobile Number.");

        return;

    }


    alert(
        "Thank you " +
        name +
        "! Your enquiry has been received."
    );


    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Requirement:", requirement);
    console.log("Message:", message);


    contactForm.reset();

});