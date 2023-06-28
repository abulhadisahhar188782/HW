
//cooding the products

let Card = document.querySelectorAll(".products .card .image img");
let pr = document.querySelectorAll(".card p");

//looping on all the products

Card.forEach(e => {
    e.addEventListener("click" , (ev) => {

        //creat the blak layer when you click on the product

        let layer = document.createElement("div");

        //give it a class to style it
        layer.className = "blacklayer";

        //creat the div which contain all the information and images
        let imageDive = document.createElement("div");

         //give it a class to style it
         imageDive.className = "image-div";

         //creat the image which you click on
         let theimg  = document.createElement("img");


         //give it a class to style it
         theimg.className = "img-in";

         //make the same sourc
         theimg.src = e.src;

         //add the image we click on to the image Div to appear 
         imageDive.appendChild(theimg);
  

         //creat the div that we want to click on to close the image
         let closeDiv = document.createElement("div");

         //creat the close icon which is X
         let close = document.createTextNode("X");

        //give it a class to style it
         closeDiv.className = "close-mark";

         //add the close to the div to appear
         closeDiv.appendChild(close);

         //add the close div to image div to make it one card
         imageDive.appendChild(closeDiv);

         //creat the div which containe the description of the product 
         let thedesc = document.createElement("div");

         //give it a class to style it
         thedesc.className = "the-name";

         //creat the description text 
         let thedescPara = document.createTextNode("you have 30% discount");

         //add the description text to the div 
         thedesc.appendChild(thedescPara);

         //add the desription div to the image div to make it one card
         imageDive.appendChild(thedesc);

         //creat the div which containe the Name of the product 
         let theNameDiv = document.createElement("div");

         //give it a class to style it
         theNameDiv.className = "thename-div";

         //creat the Name text 
         let theName = document.createTextNode("the Name is: T-shirt ");

         //add the Name text to the div 
         theNameDiv.appendChild(theName);

         //add the desription div to the image div to make it one card
         imageDive.appendChild(theNameDiv);

         //creat the div which containe the price of the product 
         let thePriceDiv = document.createElement("div");

         //give it a class to style it
         thePriceDiv.className = "theprice-div";

         //creat the price text 
         let thepriceTe = document.createTextNode(`the price is: 50$ `);
        
         //add the price text to the div 
         thePriceDiv.appendChild(thepriceTe);

         //add the desription div to the image div to make it one card
         imageDive.appendChild(thePriceDiv);

         //add the black layer to image div
         layer.appendChild(imageDive);

         ////////////////////////////////////////////////////////////////////////////////////////////
         let buyBtn = document.createElement("button");
         buyBtn.innerHTML = "Buy cart";

         buyBtn.className = "buy-btn";
         let buyD = document.createElement("div");
         buyD.className = "buy-div";
         buyD.appendChild(buyBtn);

         imageDive.appendChild(buyD);
         ////////////////////////////////////////////////////////////////////////////////////////////
         

         //add all the elements to the body
         document.body.appendChild(layer);





         //creat a function theat when you click on the close icon the imageDiv disappear
         closeDiv.onclick = function(){

            closeDiv.parentNode.style.display = "none";
            layer.style.display = "none";
        }




        buyBtn.onclick = function(){


         

            //creat the container 
            let container = document.createElement("div");
            container.className = "container";
        
            let Cart = document.querySelector(".cart");

            //creat the image of product
            let cartImg = document.createElement("img");

            //give the cart image a class
            cartImg.className = "cart-img";

            //append container to the cart 
            Cart.appendChild(container);

            let cartCard = document.createElement("div");
            cartCard.className = "cart-card";

            //append the image to the container
            container.appendChild(cartCard);

            cartCard.appendChild(cartImg);

            //append the cart to the body to appear
            document.body.appendChild(Cart);

            //give the choosen image the same sourc 
            cartImg.src = theimg.src;

            //creat the price text
            let cartPrice = document.createElement("div");

            //give the cart price a class name
            cartPrice.className = "cart-price";


            //creat the price text
            

            // cartPrice.appendChild(document.createTextNode(thepriceTe));

            cartPrice.textContent = thepriceTe.textContent;



            cartCard.appendChild(cartPrice);

            container.appendChild(cartCard);

            Cart.appendChild(container);


            let BtnCart = document.createElement("button");

            BtnCart.className = "btn-cart";

            BtnCart.innerText = "Delet";

            cartCard.appendChild(BtnCart);


                BtnCart.onclick = function(){

                BtnCart.parentNode.style.display = "none";
                
        }

        }

    })
})


let spanPrice = document.querySelector("h1 .span-price");



let theIcon = document.querySelector(".header .icon");
let list  = document.querySelector(".header .the-head ul");

// console.log(theIcon);
console.log(list);
theIcon.onclick = function(){
list.classList.toggle("change");
}

