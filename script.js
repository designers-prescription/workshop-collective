document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('accordion-toggle');
    const content = document.getElementById('accordion-content');
    
    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        content.classList.toggle('open');
    });
});

