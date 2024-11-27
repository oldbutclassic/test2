// 이미지 링크 모음
const imageLinks = {
    1: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEcBX1YCmPzIOdIrxAER65zM9BA7f5EaICDtJLvp5gqlpIlcDxctLjvCWYoUJhRuIz95ryrMj36gfkIay2D6al2NK-hi0meQXuIFAmfRTxJGVzd-8GZZUkLk5jTvfxoIGdDoRFnaVqAxlxkH6oiOgDS0X_2pXD2ZGXGzVkGpSneXeZn294CTgUKFxy4HEq/s1600/20241122202141.jpg",
    2: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ03obhQhFCy7SHSQ4AfOLpmLzgWrwLxmm0BJ_YKi6vEd1xCu_8H9CwgsDKnkAdFlNc_w9-uBFFfdewKq8eq5rSa4hVfIpiCmDTIbys576PFblkOOgDW0U1pLBpD2GHLE4iQrO1A7wwbzees5ym8zzRnteaPeEt8PSWREPl6nhyphenhyphenAeLvd-vvagGJJecIFhc/s1600/20241122202143.jpg",
    3: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX5JNaimIUwg7k1x2z34dUuzBbCVIQR_yweC2VneFMF1mqnnbhoHMdkq76vSWCaP-ejx6agquXqO9Jq4zkOGQxKbZ7rEY0hnbboaauPQZjObFOs_1bmXBSwuchOuQGVTH1xUaZyVZIsTNh_8tQjuRY2khsV4JXH37yC834LOeApcTkN2E6FjXs5GM9QFhq/s1600/20241122202146.jpg",
    4: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOXF2mLiuIi4THGMfp9nXF5vOJUzySy5x4eZRYVtJ7T3_2n9KDH5mr4_YeARyZFnFE-DaBAJaeNPj3qMIzDomugd1CYYcXug-Em0xl98Z6gx_XQVUZG4zfeDO-hg1cqEdTlb2Ud5J1KaeVzlj2eeDxJP88C-egK_9FXAaIKa0GW8dwbfZDHghgczNox7_V/s1600/202411222021480.jpg" 

  };
  
  // 동적으로 이미지 추가
  const container = document.getElementById('image-container');
  Object.keys(imageLinks).forEach(key => {
    const img = document.createElement('img');
    img.src = imageLinks[key];
    img.alt = key;
    img.style.width = '300px'; // 크기 조정
    container.appendChild(img);
  });
  