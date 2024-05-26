document.addEventListener('DOMContentLoaded', () => {
    const contentSection = document.getElementById('content');
    const links = document.querySelectorAll('nav.vertical-nav a[data-page]');

    const loadPage = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                contentSection.innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    };

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.closest('a').getAttribute('data-page');

            links.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("data-page") === page) {
                    link.classList.add("active");
                }
            });

            if (page === "./new-game/new-game.html") {
                console.log("hello from new-game.html");
            }

            loadPage(page);
        });
    });

    loadPage('./dashboard/dashboard.html');
});
