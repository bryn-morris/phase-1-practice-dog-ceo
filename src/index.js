//console.log('%c HI', 'color: firebrick')

////////////////////////////////////////////////////////////////
//////////////////////    Challenge 1
////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', ()=>{
    fetch ('https://dog.ceo/api/breeds/image/random/4')
        .then (r => r.json())
        .then (dogObj => {

            const dogContainer = document.querySelector('#dog-image-container')
            
            dogImageArray = dogObj.message

            dogImageArray.forEach((imageString) => {
            
                newImg = document.createElement('img');
                newImg.src = imageString
                dogContainer.append(newImg)
            }
            )
        })
})

////////////////////////////////////////////////////////////////
//////////////////////    Challenge 2 & 3
////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    fetch ('https://dog.ceo/api/breeds/list/all')
        .then (r=>r.json())
        .then (parentObj => {

        dogBreedUl = document.querySelector('ul#dog-breeds');

        let dogArray = Object.keys(parentObj.message);
        
        dogArray.forEach((dogString)=>{
            const newLi = document.createElement('li');
            newLi.innerText = dogString;

            newLi.addEventListener('click', ()=>{

                liColor = newLi.style.color

                if (liColor === 'green'){
                    liColor = "black";
                } else {
                    liColor = "green"
                }

            })

            dogBreedUl.append(newLi);
        })
        })
} )

/// Figure out Color change solution with a boolean 


////////////////////////////////////////////////////////////////
//////////////////////    Challenge 4
////////////////////////////////////////////////////////////////

// FINISH THIS LATER