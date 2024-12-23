// 메인 페이지 게시글 로드
if (document.getElementById('posts')) {
    const posts = [
      { title: "First Post", content: "This is my first blog post!", id: 1 },
      { title: "About JavaScript", content: "Learning JavaScript is fun.", id: 2 },
      { title: "A Day in Life", content: "Sharing my daily experiences.", id: 3 },
    ];
  
    const postsSection = document.getElementById('posts');
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'blog-post';
      postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <a href="post.html?id=${post.id}" class="read-more">Read More</a>
      `;
      postsSection.appendChild(postDiv);
    });
  }
  
  // Contact 페이지 폼 처리
  if (document.getElementById('contactForm')) {
    const form = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // 폼 제출 기본 동작 방지
      confirmation.style.display = 'block';
      form.reset(); // 폼 초기화
    });
  }
  
  if (document.getElementById('posts')) {
    // posts.json 파일에서 데이터 가져오기
    fetch('./posts.json')
        .then(response => response.json())
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

  