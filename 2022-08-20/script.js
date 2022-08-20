function changeHeaderColor(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
};
window.addEventListener('scroll',change);

// window.addEventListener('scroll', function(){
//     const header = document.querySelector('header');
//     header.classList.toggle("sticky", window.scrollY > 0)
// });