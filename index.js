// Fetch and display posts using async/await
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Display posts in the DOM
function displayPosts(posts) {
  const list = document.getElementById('post-list');
  
  posts.forEach(({ title, body }) => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    
    h1.textContent = title;
    p.textContent = body;
    
    li.append(h1, p);  // append both at once
    list.appendChild(li);
  });
}

// Start when script loads
fetchAndDisplayPosts();