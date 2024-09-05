document.addEventListener('DOMContentLoaded', function() {
    const servicesDropdown = document.querySelector('.services-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    function handleDropdown(e) {
        if (window.innerWidth <= 600) {
            e.preventDefault();
            this.classList.toggle('active');
            e.stopPropagation();
        }
    }

    servicesDropdown.addEventListener('click', handleDropdown);

    document.addEventListener('click', function(e) {
        if (!servicesDropdown.contains(e.target) && window.innerWidth <= 600) {
            servicesDropdown.classList.remove('active');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            servicesDropdown.classList.remove('active');
        }
    });
});