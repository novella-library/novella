const cursor = document.querySelector('.cursor');

// Custom Cursor Movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor effect on links
document.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2)');
    link.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// Subtle Parallax for Books based on Mouse
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    document.querySelectorAll('.floating-book').forEach(book => {
        book.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

document.querySelector('.btn-pill-about').addEventListener('click', function(e){
    e.preventDefault(); // منع الرابط الافتراضي
    const section = document.getElementById('about');
    const sectionPosition = section.offsetTop - window.innerHeight / 2 + section.offsetHeight / 2;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
});

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});
