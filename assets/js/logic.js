// Below is the functionality that enables us to save and load data from the local storage, validate form fields and handle form submission.
// When a user submits a form it ensures all the fields are properly filled out, saves the input data to local storage and redirects it to the blog page so it is visible.

// Function to save data to local storage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
// Function to load data from local storage
function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
// Function to validate form fields
// Validates that are fields are filled out (not empty or whitespace)
function validateFields(fields) {
    return Object.values(fields).every(field => field.trim() !== '');
}

// Function to handle form submission
function handleFormSubmission(event, errorMessageElement) {
    event.preventDefault();


// Retrieves the values from the form fields with IDs username, title, and content.
// Trim method to remove and whitespace from values
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    // Displays error message if fields are not filled out
    if (!validateFields({ username, title, content })) {
        errorMessageElement.textContent = 'Please enter text in the fields';
        return;
    }

    // 1. Clears error message if it passes validation (errorMessageElement.textContent = '';)
    // 2. Create a blog object containing the form data ( const blog = { username, title, content };)
    // 3. Loads existing blogs from local storage (const blogs = loadFromLocalStorage('blogs') || [];)
    // 4. Adds new blog object to list of blogs on page (blogs.push(blog);)
    // 5. Saves updated list of blogs to local storage (saveToLocalStorage('blogs', blogs);)
    // 6. Redirects to blog page (window.location.href = 'blog.html';)
    errorMessageElement.textContent = '';
    const blog = { username, title, content };
    const blogs = loadFromLocalStorage('blogs') || [];
    blogs.push(blog);
    saveToLocalStorage('blogs', blogs);
    window.location.href = 'blog.html';
}
