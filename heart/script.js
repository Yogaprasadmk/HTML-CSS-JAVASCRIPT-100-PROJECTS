const greyHeart = document.querySelector('.grey-heart');

const redheart = document.querySelector('.red-heart');

greyHeart.addEventListener('click',()=>{
          redheart.classList.add('animation');
          greyHeart.classList.add('.fill-color');
})

redheart.addEventListener('click',()=>{
          redheart.classList.remove('animation');
          greyHeart.classList.remove('.fill-color');
})