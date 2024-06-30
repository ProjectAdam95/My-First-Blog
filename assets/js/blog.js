// Below is the javascript for the blog page.

// Wait for DOM to load before running the code below
document.addEventListener('DOMContentLoaded', function () {
    const blogsContainer = document.getElementById('blogsContainer');
    const blogs = loadFromLocalStorage('blogs') || [];

    
        // Check if any blogs stored in local storage, if not displays message no blogs are found 
    if (blogs.length === 0) {
        blogsContainer.innerHTML = '<p>No blogs available.</p>';
    } else {
       // if blogs are found it will Display the 5 latest blogs
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

    // Adds event listener to back button to go back to index or landing page.
    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });


    // Adds event listener to theme toggle button to switch between dark/light mode.
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        saveToLocalStorage('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    applySavedTheme();
});

// Apply saved theme based on local storage
function applySavedTheme() {
    if (loadFromLocalStorage('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Function to load data from local storage
function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// Function to save data to local storage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

