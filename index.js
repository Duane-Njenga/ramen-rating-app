const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Nirvana Ramen", restaurant: "Menya", image: "./images/nirvana.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "./images/naruto.jpg", rating: 3, comment: "" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Ramen-ya", image: "./images/gyukotsu.jpg", rating: 3, comment: "" },
    { id: 5, name: "Kojiro Ramen", restaurant: "Ramen-ya", image: "./images/kojiro.jpg", rating: 3, comment: "" },
];
  

let currentRamenId = null;

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear existing content
  
    ramens.forEach((ramen) => {
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => handleClick(ramen));
      ramenMenu.appendChild(img);
    });
}
  

function handleClick(ramen) {
    currentRamenId =ramen.id;
    document.getElementById('detail-image').src = ramen.image;
    document.getElementById('name').textContent = ramen.name;
    document.getElementById('restaurant').textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById('rating').textContent = `Rating: ${ramen.rating}`;
    document.getElementById('comment').textContent = `Comment: ${ramen.comment || 'No comment'}`;
}
  

function addSubmitListener() {
    const form = document.getElementById('ramen-form');
  
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event.target);
        
        const newName = document.getElementById('new-name').value;
        const newRestaurant = document.getElementById('new-restaurant').value;
        const newImageInput = document.getElementById('new-image-file');
        const newImageURL = document.getElementById('new-image-path').value;
        const newRating = document.getElementById('new-rating').value;
        const newComment = document.getElementById('new-comment').value;
  
    let imageURL = '';
  

    if (newImageInput.files && newImageInput.files[0]) {
        imageURL = URL.createObjectURL(newImageInput.files[0]);
    } else if (newImageURL) {
        imageURL = newImageURL;
    } else {
        alert('Please provide an image file or path.');
        return;
    }

  
    const newRamen = {
        id: ramens.length + 1,
        name: newName,
        restaurant: newRestaurant,
        image: imageURL,
        rating: newRating,
        comment: newComment
    };
  
    ramens.push(newRamen);
    displayRamens(); 
    form.reset(); 
    });
}
  

function main() {
    displayRamens();
    addSubmitListener();
}
  
document.addEventListener('DOMContentLoaded', main);