document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        sidebarToggle.classList.toggle('open');
    });
    
    // Kategori linklerine tıklama işlevi
    const menuLinks = document.querySelectorAll('.sidebar .menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                toggleButton.classList.remove('open');
            }
        });
    });

    // Sidebar açıkken herhangi bir boş alana tıklanırsa sidebar'ı kapat
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            toggleButton.classList.remove('open');
        }
    });

    // Sayfa gösterme işlevi
    function showPage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.style.display = (page.id === pageId) ? 'block' : 'none';
        });
    }

    // Varsayılan olarak ana sayfayı göster
    showPage('home');



    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);

            // Menü açma/kapama işlevi
            const sidebar = document.getElementById('sidebar');
            const toggleButton = document.getElementById('sidebar-toggle');
            toggleButton.addEventListener('click', function() {
                sidebar.classList.toggle('open');
                toggleButton.classList.toggle('open');
            });

            // Sidebar açıkken herhangi bir boş alana tıklanırsa sidebar'ı kapat
            document.addEventListener('click', function(event) {
                if (!sidebar.contains(event.target) && !toggleButton.contains(event.target) && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    toggleButton.classList.remove('open');
                }
            });

            // Sayfa gösterme işlevi
            function showPage(pageId) {
                const pages = document.querySelectorAll('.page');
                pages.forEach(page => {
                    page.style.display = (page.id === pageId) ? 'block' : 'none';
                });
            }

            // Varsayılan olarak ana sayfayı göster
            showPage('home');
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading menu:', error));
});
