function getNewImage (){
    fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => addImageToWebpage(data));
}

function addImageToWebpage(object){
    const listContainer = document.getElementById("dogListContainers");
    listContainer.innerHTML += `<ul><img id="dogImage" src="${object.message}"></ul>`
}