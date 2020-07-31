// Unspalsh API
const count = 10;
const apiKey ='qMX3T6Hu23aMnx-eaAfgcD2W81IWf91pjkBGWLXdxTk';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// GET PHOTOS FROM UNSPALSH API

async function getPhotos() {
    try {
const response = await fetch(apiUrl);
const data = await response.json();
console.log(data);
    }catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();