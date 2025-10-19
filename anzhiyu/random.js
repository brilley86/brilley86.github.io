var posts=["2025/09/07/hello-world/","2025/10/19/more_site/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };