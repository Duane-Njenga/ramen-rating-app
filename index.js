const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Nirvana Ramen", restaurant: "Menya", image: "nirvana.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "naruto.jpg", rating:3, comment:""},
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Ramen-ya", image: "gyukotsu.jpg", rating:3, comment:""},
    { id: 5, name: "Kojiro Ramen", restaurant: "Ramen-ya", image: "kojiro.jpg", rating:3, comment:""},
];

const ramenMenu = document.getElementById("gallery");
const ramenDetail = document.getElementById("details");
const form = document.getElementById("ramenForm");

let ramenList = [...ramens];

// Display Ramen Images
function displayRamens() {
    const menu = document.getElementById('ramen-menu');
    menu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = `./images/${ramen.image}`;
        img.alt = ramen.name;
        img.addEventListener("click", () => {
            handleClick(ramen);
            highlightSelection(img);
        });
        menu.appendChild(img);
    });
}

function highlightSelection(selectedImg) {

    document.querySelectorAll("#ramen-menu img").forEach(img => {
        img.classList.remove("selected");
    });

    selectedImg.classList.add("selected");
}


// Ramen Detail Display
function handleClick(ramen) {
    const detail = document.getElementById('ramen-detail');
    
    detail.querySelector('.name').textContent = ramen.name;

    detail.querySelector('.restaurant').textContent = ramen.restaurant;
    
    detail.querySelector('.rating').textContent = ramen.rating ? `${ramen.rating}/5` : '';

    detail.querySelector('.comment').textContent = ramen.comment || 'No comment';
}

// Handle New Ramen Form Submission
function addSubmitListener() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const newRamen = {
            id: ramenList.length + 1, 
            name: formData.get("name"),
            restaurant: formData.get("restaurant"),
            image: formData.get("image"),
            rating: parseInt(formData.get("rating")) ||"No rating provided",
            comment: formData.get("comment") || "No comment",
        };

        ramenList.push(newRamen);
        displayRamens();
        handleClick(newRamen);

        form.reset();
    });
}


function main() {
    displayRamens();
    addSubmitListener();
}

main();