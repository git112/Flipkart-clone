let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())// Replace with your API endpoint
        const data = await response.json();
        
        displayProducts(data.products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const itemSection = document.querySelector('.itemSection'); 
    itemSection.innerHTML = ''; 
    products.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const img = document.createElement('img');
        img.src = product.imageUrl; 
        img.alt = product.name;
        img.classList.add('itemImg');

        const description = document.createElement('p');
        description.classList.add('itemDescription');
        description.textContent = product.name;

        const buyNow = document.createElement('p');
        buyNow.classList.add('buyNowText');
        buyNow.textContent = 'Buy Now';

        itemDiv.appendChild(img);
        itemDiv.appendChild(description);
        itemDiv.appendChild(buyNow);
        itemSection.appendChild(itemDiv);
    });
}

fetchProducts();