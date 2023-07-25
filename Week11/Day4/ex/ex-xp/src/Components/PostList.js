import data from './data.json'

const PostList = (props) => {
    return (
    <div>
      {data.map((item, key) => (
            <div key={key}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
            </div>
        ))
      }
      
    </div>
  );
}
  export default PostList