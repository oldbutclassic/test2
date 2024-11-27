if (document.getElementById('posts')) {
    fetch('./posts/posts.json')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch posts');
        return response.json();
      })
      .then(posts => {
        const postsSection = document.getElementById('posts');
        posts.forEach(post => {
          const postDiv = document.createElement('div');
          postDiv.className = 'blog-post';
          postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <a href="${post.link}" class="read-more">Read More</a>
          `;
          postsSection.appendChild(postDiv);
        });
      })
      .catch(error => console.error('Error loading posts:', error));
  }
  