$("#borgir").click(function() {
    $("#borgir").css("display", "none");
    $(".navLinks").css("display", "flex");
    $(".navLinks").css("flex-direction", "column");
    document.addEventListener('click', (event) => {
        if (!event.target.closest('nav') && !event.target.closest('#borgir')) {
            $("#borgir").css("display", "block");
            $(".navLinks").css("display", "none");
        }
    });
})

function highlightActiveLink() {
    const links = document.querySelectorAll('.navLinks a');  
    const currPath = window.location.pathname; 

    links.forEach(link => {
        const linkPath = link.getAttribute('href'); 
        
        if (linkPath === currPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}