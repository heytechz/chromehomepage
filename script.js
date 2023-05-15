document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var query = document.getElementById('search-input').value;
  var url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  window.location.href = url;
});

window.addEventListener('load', function() {
  var overlay = document.getElementById('loading-overlay');
  overlay.classList.add('hide');
});



// Function to fetch the latest posts from dev.to API
function fetchDevPosts() {
  fetch('https://dev.to/api/articles?top=1')
    .then(response => response.json())
    .then(data => renderDevPosts(data))
    .catch(error => console.error(error));
}

// Function to render the dev.to posts on the page
function renderDevPosts(posts) {
  const devPostsContainer = document.getElementById('dev-posts-container');

  posts.forEach(post => {
    // Create a card element for each post
    const card = document.createElement('div');
    card.classList.add('dev-post-card');

    // Create post title element
    const title = document.createElement('h3');
    title.textContent = post.title;

    // Create post description element
    const description = document.createElement('p');
    description.textContent = post.description;

    // Create post link element
    const link = document.createElement('a');
    link.href = post.url;
    link.textContent = 'Read more';

    // Append elements to the card
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    // Append card to the container
    devPostsContainer.appendChild(card);
  });
}
// Fetch and render the dev.to posts when the page loads
window.addEventListener('load', fetchDevPosts);


