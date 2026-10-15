const photoNames = [
    "Assets/HAND Images/HandDemo1.JPG",
    "Assets/HAND Images/HandDemo2.JPG",
    "Assets/HAND Images/HandDemo3.JPG"
];

var photoReelContainer;

let curPhoto = 0;

function addPhotoReel(){
    photoReelContainer = document.getElementById("photo-reel");

    photoNames.forEach(photo => {
        let img = document.createElement("img");
        img.src = photo;
        photoReelContainer.appendChild(img);
    });
}

function goToPhoto(index){
    photoReelContainer
}

function next(){
    if(curPhoto = photoNames.length-1){
        goToPhoto(0);
    }else{
        goToPhoto(curPhoto+1);
    }
}

function prev(){
    if(curPhoto = 0){
        goToPhoto(photoNames.length-1);
    }else{
        goToPhoto(curPhoto-1);
    }
}