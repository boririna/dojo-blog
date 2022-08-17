import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = 'Irina'

  // Using a hook use State, hook is a special function that does
  // a certain job
  // const [name, setName] = useState('Mario');
  // const [age, setAge] = useState(30);

  // using an event object in a function
  // const handleClick = (name, e) => {
  //   console.log("Hello" + name, e)
  // }

  // const handleClick = () => {
  //   setName('Luigi');
  //   setAge(35);
  // }
  const [blogs, setBlogs] = useState (null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          console.log(res);
          if(!res.ok) {
            throw Error('could not fetch the data for that resourse');
          }
          return res.json();
        })
        .then((data => {
          setBlogs(data);
          setIsPending(false);
          setError(false);
        }))
        .catch(err => {
          setIsPending(false)
          setError(err.message);
        })
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}


      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}

      {/* <p>{name} is {age} years old</p>
      <button onClick={ handleClick }>Click me</button> */}

      {/* <button onClick={(e) => handleClick("Irina", e)}>Click me</button> */}
    </div>
  );
}

export default Home;
