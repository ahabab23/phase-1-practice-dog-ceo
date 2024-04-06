console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
document.addEventListener("DOMContentLoaded",
function(){
    function loadDogImages(){
        fetch(imgUrl)
            .then((response)=> response.json())
            .then((data)=>{
                const images=data["message"] 
                images.forEach(element => {
                    const dogImages=document.createElement('img');
                    const dogImageContaainer=document.querySelector("#dog-image-container")
                    dogImages.src=element;  
                    dogImageContaainer.appendChild(dogImages); 
                    
                })    
            })
    
    }
    function loadDogBreed(){
        fetch(breedUrl).then(response=>response.json()).then(
            (data)=>{
                const breeds= data["message"];
                for(breed in breeds){
                    const dogBreed=document.createElement('li');
                    const dogBreeds=document.querySelector("#dog-breeds")
                    dogBreed.innerText=breed;  
                    dogBreeds.appendChild(dogBreed)
                    dogBreed.addEventListener('click', ()=>{
                    dogBreed.style.color="red"
                    const options=document.querySelector("#breed-dropdown")
                    options.addEventListener('change',function(event){
                        
                    })

                    })      
                }


            }
        )

    }
    loadDogImages()
    loadDogBreed()
}
)
