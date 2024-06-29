document.addEventListener('DOMContentLoaded', function () {
    const blogsContainer = document.getElementById('blogsContainer');
    const blogs = loadFromLocalStorage('blogs') || [];

    if (blogs.length === 0) {
        blogsContainer.innerHTML = '<p>No blogs available.</p>';
    } else {
        // Display the 5 latest blogs
        blogs.reverse().slice(0, 5).forEach(blog => {
            blogsContainer.insertAdjacentHTML('beforeend', `
                <article>
                    <h2>${blog.title}</h2>
                    <p>${blog.content}</p>
                    <p><strong>By: ${blog.username}</strong></p>
                </article>
            `);
        });
    }

    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        saveToLocalStorage('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    applySavedTheme();
});

function applySavedTheme() {
    if (loadFromLocalStorage('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

