const share = document.getElementById('share');
const socialMedia = document.getElementById('social-media');


share.addEventListener('click',()=> {
    socialMedia.classList.toggle('active');
    share.classList.toggle('share-active');
});