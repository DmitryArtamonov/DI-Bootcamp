import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';


let parser = new Parser();

const app = express();


app.use(cors());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Function to format the date as "dd-mm-yy"
function formatDate(date) {
  return date.substring(5,15)
}

// Homepage GET
app.get('/', async (req, res) => {
    const feed = await getRSS()
    const posts = feed.items
    res.render('index', {posts, formatDate})
})


// Search GET
app.get('/search', async (req, res) => {
  const feed = await getRSS()
  let posts
  let searchString = ''
  let categoryString = ''

  // getting list of posts
  if ("category" in req.query || "search_title" in req.query){
    posts = feed.items
  } else {
    posts = []
  }

  // getting list of categories
  let categories = [];
  for (let item of feed.items){
    if (categories.includes(...item.categories)){
      continue
    }
    categories.push(...item.categories)
  }
  categories.sort((a,b) => a.localeCompare(b))

  // if category submited

  if ('category' in req.query){
    posts = posts.filter(item => item.categories.includes(req.query.category))
    categoryString = req.query.category
  }

  // if search submited

  if ('search_title' in req.query){
    posts = posts.filter(item => 
      item.title.toLowerCase().includes(req.query.search_title.toLowerCase()))
      searchString = req.query.search_title
  }


  res.render('search', {posts, categories, formatDate, searchString, categoryString})
})



async function getRSS() {

    let feed = await parser.parseURL('https://thefactfile.org/feed/');

    return feed
  
  };



app.listen(3000, () => console.log('Listening on port 3000!'));


