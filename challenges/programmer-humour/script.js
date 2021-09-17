fetch(`https://xkcd.now.sh/?comic=latest`).then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Something went wrong');
  }
})
.then((responseJson) => {
  addImageToWebpage(responseJson)
})
.catch((error) => {
  console.log(error)
});


function addImageToWebpage(object){
    console.log(object)
    const imgTag = document.getElementById("imageTag");
    imgTag.innerHTML += `<img id="dogImage" src="${object.img}">`
}