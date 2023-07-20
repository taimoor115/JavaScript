const posts = [
  { title: 'Post 1', body:'This is first post'},
  { title: 'Post 2', body:'This is second post'}
];

function getPosts() {
  setTimeout(() => {
    let head = '';
    let text = '';
    posts.forEach((i) => {
      head += `<li>${i.title}</li>`;
      text += `<p>${i.body}</p>`;
    });
    document.body.innerHTML =
    `
      <h3>${head}</h3>
      <p>${text}</p>
    `;
  },1000);
};


function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false;

        if (!error) {
          resolve();
        } else {
          reject('Error occured')
        }
      }, 1000);
    });
}


// createPost({title: 'Post 3', body: 'This is the post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// const promise1 = Promise.resolve('Hello');
// const promise2 = 10;
// const promise3 =  new Promise((resolve,reject) => {
//   setTimeout(resolve, 2000, 'Good bye' )
// },1000);
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1,promise2,promise3,promise4])
// .then(values => console.log(values));


async function init() {
  await createPost({title: 'Post 3', body: 'This is the post three'})
  getPosts();
}

init();


async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

fetchUser();
