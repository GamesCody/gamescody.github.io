const door = document.getElementById('door');
const cody = document.getElementById('cody');
const bubble = document.getElementById('bubble-container');

door.addEventListener('mousedown', function() {
    cody.classList.add('cody-animate');
    bubble.classList.add('bubble-animate');
});

document.addEventListener('mouseup', function() {
    cody.classList.remove('cody-animate');
    bubble.classList.remove('bubble-animate');
});

door.addEventListener('touchstart', function() {
    cody.classList.add('cody-animate');
    bubble.classList.add('bubble-animate');
});
document.addEventListener('touchend', function() {
    cody.classList.remove('cody-animate');
    bubble.classList.remove('bubble-animate');
});
document.getElementById('project').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('home').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('landing').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contact').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact-info').scrollIntoView({ behavior: 'smooth' });
});
