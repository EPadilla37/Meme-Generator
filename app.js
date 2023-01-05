
const form = document.querySelector('.form'); 
const displayPicture = document.querySelector('.pictures-main'); 

//Eventlistiner to create image, reset form on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    createImageDiv(); 
    form.reset(); 
})

//Event listiner to remove image on click
displayPicture.addEventListener('click', (e) => {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})

document.querySelector('.meme').remove();

const createImageDiv = () => {

    //Gets and creates needed elements for meme
    const image = document.createElement('div'); 
    const delX = document.createElement('span'); 
    
    const urlInput = document.querySelector('input[name=url]').value; 
    const memeImg = document.createElement('img');
    
    const topInput = document.querySelector('input[name=top-text]').value; 
    const topText = document.createElement('h2'); 

    const bottomInput = document.querySelector('input[name=bottom-text]').value; 
    const bottomText = document.createElement('h2'); 
    
    //Creates meme only if URL input is not empty 
    if(urlInput.length > 0){
        //Delete functionality
        delX.innerText = "X"; 
        delX.className = 'delete'; 
        image.appendChild(delX); 
        displayPicture.appendChild(image); 
        image.className = 'meme'; 
        //Adds image inside div element     
        memeImg.className = 'img'; 
        memeImg.setAttribute('src', urlInput);
        //Adds top text 
        topText.className = 'top'; 
        topText.innerText = topInput;  
        //Adds bottom text
        bottomText.className = 'bottom'; 
        bottomText.innerText = bottomInput; 
        //Appends everything to meme div
        image.appendChild(memeImg);
        image.appendChild(topText); 
        image.appendChild(bottomText);
    }else{
        alert(`Please enter URL`); 
    }
     


}






