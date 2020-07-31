const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray[''];


// Unspalsh API
const count = 10;
const apiKey ='qMX3T6Hu23aMnx-eaAfgcD2W81IWf91pjkBGWLXdxTk';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// GET PHOTOS FROM UNSPALSH API

// Helper function to set attributes on DOM Elements
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttributes(key, attributes[key]);
    }
} 

// Create Elements for links & photos, add to DOM
function displayPhotos() {
    //run function for each object in photosArray
    
photosArray.forEach((photo) => {
// create <a> to link to Unsplash
const item = document.createElement('a');
setAttributes(item, {
    href: photo.links.html,
    target: '_blank', 
    });
// Create <img> for photo
const img = document.createElement('img');
setAttributes(img, {
    src: photo.urls.regular,
    alt: photo.alt_descritption,
    title: photo.alt_descritption,
})

// Put <img> inside <a>, then place both inside imageContainer Element
item.appendChild(img);
imageContainer.appendChild(item);
 });
}

async function getPhotos() {
    try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    }catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();