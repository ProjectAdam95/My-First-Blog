function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function validateFields(fields) {
    return Object.values(fields).every(field => field.trim() !== '');
}

function handleFormSubmission(event, errorMessageElement) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!validateFields({ username, title, content })) {
        errorMessageElement.textContent = 'Please enter text in the fields';
        return;
    }

    errorMessageElement.textContent = '';
    const blog = { username, title, content };
    const blogs = loadFromLocalStorage('blogs') || [];
    blogs.push(blog);
    saveToLocalStorage('blogs', blogs);
    window.location.href = 'blog.html';
}
