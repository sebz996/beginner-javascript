// const arch = document.querySelector('.archive');

// arch.addEventListener('click', function(event) {
   
//     const shouldChangePage = confirm('This website is not for posers. Do you proceed?');
//     if(!shouldChangePage) {
//         event.preventDefault();
//     }
//     console.log(shouldChangePage);
    
// });

// const signupForm = document.queryCommandIndeterm('[name="signup"]');

// signupForm.addEventListener('submit', function(event) {
//     console.log(event);
//     event.preventDefault();
//     console.log(event.currentTarget.name.value);
//     console.log(event.currentTarget.email.value);
//     console.log(event.currentTarget.agree.checked);
// });

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
    if(event.type === 'click' || event.key === 'Enter') {
        
    }
    console.log('You clicked the photo');
    console.log(event.keycode);
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
