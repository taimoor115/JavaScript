const posts = [
  { title:  'Post One', body: 'This is the first post'},
  { title:  'Post Two', body: 'This is the Second post'}

];


function getPost() {
setTimeout(() => {
  let output = '';
  posts.forEach((i,index) => {
      output += `<li>${i.title}</li>`;
  });
  document.body.innerHTML = output;
}, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000)
};

createPost({ title: 'Post three', body: 'This is the third post'}, getPost);
