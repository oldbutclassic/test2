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
  
  // 게시글 상세 보기 (예: post.html)
  if (window.location.pathname.includes('post.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const postContent = {
      1: { title: "First Post", content: "Detailed content about the first post." },
      2: { title: "About JavaScript", content: "JavaScript is a versatile language." },
      3: { title: "A Day in Life", content: "Here’s a deeper dive into my daily life." },
    };
  
    const post = postContent[postId] || { title: "Post Not Found", content: "Sorry, this post does not exist." };
    document.body.innerHTML = `
      <header class="blog-header">
        <h1><a href="index.html">My Simple Blog</a></h1>
      </header>
      <main>
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <a href="index.html">Back to Home</a>
      </main>
    `;
  }
  