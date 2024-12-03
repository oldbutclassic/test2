// 외부 이미지 URL 리스트
const imagePaths = {
    post1: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEcBX1YCmPzIOdIrxAER65zM9BA7f5EaICDtJLvp5gqlpIlcDxctLjvCWYoUJhRuIz95ryrMj36gfkIay2D6al2NK-hi0meQXuIFAmfRTxJGVzd-8GZZUkLk5jTvfxoIGdDoRFnaVqAxlxkH6oiOgDS0X_2pXD2ZGXGzVkGpSneXeZn294CTgUKFxy4HEq/s1600/20241122202141.jpg", // 게시글 1 이미지
    post2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdvDIyQlAdyFuGPAtIC2AO6vt4bwOSkbmFg&s", // 게시글 2 이미지
    post3: "https://via.placeholder.com/250", // 게시글 3 이미지
  };
  
  // 이미지 삽입 함수
  function setPostImages() {
    // 각 게시글에 이미지 URL 적용
    for (const postId in imagePaths) {
      const postElement = document.getElementById(postId); // 각 게시글의 ID를 사용
      if (postElement) {
        const imgElement = postElement.querySelector(".index-image"); // 이미지 태그 선택
        if (imgElement) {
          imgElement.src = imagePaths[postId]; // src 속성 설정
        }
      }
    }
  }
  
  // DOM이 준비되었을 때 실행
  document.addEventListener("DOMContentLoaded", setPostImages);
  