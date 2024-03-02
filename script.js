document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');
    const fancyText = document.querySelectorAll('.fancy-basic-text');
    customCursor.style.width = '20px';
    customCursor.style.height = '20px';

    
    document.addEventListener('mousemove', function(e) {
        const cursorX = e.clientX;
        const cursorY = e.clientY;

        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';
    });

    document.addEventListener('mousedown', function() {
        customCursor.style.width = '60px';
        customCursor.style.height = '60px';
    });

    
    document.addEventListener('mouseup', function() {
        customCursor.style.width = '20px';
        customCursor.style.height = '20px';
    });
    
});
