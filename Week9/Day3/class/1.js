const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}

//New for await of feature:
const loopThroughUrl = (urls) => {
  for (url of urls) {
    console.log(url)
  }
}


const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for (const request of arrayOfPromises) {
    console.log(request);
  }

  const data = (await arrayOfPromises[0]).json();
  console.log(data)

//   for (const request of arrayOfPromises) {
//     const data = await request.json();
//     console.log(data)
//   }
//   //In this case, for-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
}

getData2()