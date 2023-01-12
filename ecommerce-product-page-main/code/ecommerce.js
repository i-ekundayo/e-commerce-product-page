const image = document.querySelectorAll('.image');
const img = document.querySelectorAll('.image img');
const mainImages = document.querySelector('.mainImages');

// working on the mouse events of the thumbnail images
Array.from(image).forEach((el) => {
    el.addEventListener('click', (e) => {
        Array.from(img).forEach((im) => {
            Array.from(image).forEach((el) => {
                im.style.opacity = '1';
                el.style.border = 'none';
            });
            im.addEventListener('mouseenter', (e) => {
                im.style.opacity = '0.7';
            })
            im.addEventListener('mouseleave', (e) => {
                im.style.opacity = '1';
            })
        });
        let target = e.target;
        target.style.opacity = '0.4';
        el.style.border = '2px solid hsl(26, 100%, 55%)';
        target.addEventListener('mouseenter', (e) => {
            target.style.opacity = '0.4';
        })
        target.addEventListener('mouseleave', (e) => {
            target.style.opacity = '0.4';
        })
    });
});

// working on changing the main image and lightbox
const lightBoxImage = document.querySelectorAll('.lightBoxImage');
const lightBoxImg = document.querySelectorAll('.lightBoxImage img');
const mainImage = document.querySelector('.mainImage img');
const bigImg = document.querySelectorAll('.bigImg');
        

for(let i=0; i<img.length; i++) {
    let newIndex = i;
    img[i].addEventListener('click', (e) => {
        let newIndex = i;
        mainImage.src = bigImg[i].src;
        lightBoxMainImage.src = bigImg[newIndex].src;

        // working on setting the corresponding border and opacity of the thumbnail images
        function borderChange(){
            Array.from(lightBoxImg).forEach((im) => {
                Array.from(lightBoxImage).forEach((el) => {
                    el.style.border = 'none';
                    im.style.opacity = '1';
                })
                im.addEventListener('mouseenter', (e) => {
                    im.style.opacity = '0.7';
                })
                im.addEventListener('mouseleave', (e) => {
                    im.style.opacity = '1';
                })
            })
            lightBoxImage[newIndex].style.border = '2px solid hsl(26, 100%, 55%)';
            lightBoxImg[newIndex].style.opacity = '0.4';
            lightBoxImg[newIndex].addEventListener('mouseenter', (e) => {
                lightBoxImg[newIndex].style.opacity = '0.4';
            })
            lightBoxImg[newIndex].addEventListener('mouseleave', (e) => {
                lightBoxImg[newIndex].style.opacity = '0.4';
            })
        }
        borderChange();

        // working on the previous and next button
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        prev.addEventListener('click', (e) => {
            newIndex--;
            if(newIndex < 0){
                newIndex = bigImg.length-1;
                lightBoxMainImage.src = bigImg[newIndex].src;
                borderChange();
            }
            else{
                lightBoxMainImage.src = bigImg[newIndex].src;
                borderChange();
            }
        })
        next.addEventListener('click', (e) => {
            newIndex++;
            if(newIndex > bigImg.length-1){
                newIndex = 0;
                lightBoxMainImage.src = bigImg[newIndex].src;
                borderChange();
            }
            else{
                lightBoxMainImage.src = bigImg[newIndex].src;
                borderChange();
            }
        })
    })
}

// working on the increment and decrement button
const decrement = document.querySelector('#decrement');
const increment = document.querySelector('#increment');
let numberValue = document.querySelector('.numberValue');

decrement.addEventListener('click', (e) => {
    if(numberValue.value == 0){
        alert('You cannot purchase a negative number of product(s)');
    }
    else{
        numberValue.value--;
    }
})
increment.addEventListener('click', (e) => {
    if(numberValue.value >= 0){
        numberValue.value++;
    }
})

// working on the cart image
const cart = document.querySelector('.cart');
const cartBox = document.querySelector('.cartBox');
const sneaker =  document.querySelector('#sneaker');

cart.addEventListener('click', (e) => { 
    if(cartBox.classList.contains('dNone')){
        cartBox.classList.replace('dNone','active');
    }
    else{
        cartBox.classList.replace('active', 'dNone');
    }
})
sneaker.addEventListener('click', (e) => {
    if(cartBox.classList.contains('active')){
        cartBox.classList.replace('active', 'dNone');
    }
})

// working on the Add to Cart button
const cartContent = document.querySelector('.cartContent');
const cartImage = document.querySelector('.cartImage');
const checkout = document.querySelector('.checkout');
const cartPrice = document.querySelector('.cartPrice');
const addToCart = document.querySelector('.addToCart');
let cartNumber = document.querySelector('.cartNumber');
const numberOfProducts = document.querySelector('.numberOfProducts');
const totalPrice = document.querySelector('.totalPrice');

cartNumber.value = 0;
addToCart.addEventListener('click', (e) => {
    cartNumber.value = parseInt(cartNumber.value) + parseInt(numberValue.value);
    cartNumber.innerText = cartNumber.value;
    if(numberValue.value >= 0 && cartNumber.value > 0){
        cartNumber.style.display = 'block';
        numberOfProducts.innerText = cartNumber.value;
        totalPrice.innerText = '$'+ (125*cartNumber.value).toFixed(2);
        cartContent.style.display = 'none';
        cartImage.style.display = 'flex';
        cartPrice.style.display = 'flex'
        checkout.style.display = 'block';
    }
    else{
        cartContent.style.display = 'flex';
        cartImage.style.display = 'none';
        checkout.style.display = 'none';
    }
})

// working on the delete image
const deleted = document.querySelector('.delete');
deleted.addEventListener('click', (e) => {
    cartContent.style.display = 'flex';
    cartImage.style.display = 'none';
    checkout.style.display = 'none';
    cartNumber.style.display = 'none';
    cartNumber.value = 0;
})

// working on the lightbox display
const lightBoxBackground = document.querySelector('.lightBoxBackground');
const lightBoxMainImage = document.querySelector('.lightBoxMainImage img');
mainImage.addEventListener('click' , (e) => {
    lightBoxBackground.style.display = 'flex';
})

// working on the close icon
const close = document.querySelector('.close');
close.addEventListener('click', (e) => {
    lightBoxBackground.style.display = 'none';
})

for(let i=0; i<bigImg.length; i++){
    
}