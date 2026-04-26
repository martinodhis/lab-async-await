// Write your code here!
// Function to display posts on the page
function displayPosts(posts) {
  const postList = document.querySelector('#post-list');

  // Loop through the posts list
  posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    // Set text content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // Append li to the ul
    postList.appendChild(li);
  });
}

// Async function to fetch data
async function fetchPosts() {
  try {
    // Apply await to fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    // Call displayPosts() after fetch
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Call the async function to run the code
fetchPosts();