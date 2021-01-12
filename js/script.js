
document.addEventListener('mousemove', parallax);

function parallax(e) {
    document.querySelectorAll('.object').forEach(move => {
        const movingValue = move.getAttribute('data-value')
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;

        move.style.transform = 'translateX(' + x + 'px)translateY(' + y + 'px)'    
    });
}



