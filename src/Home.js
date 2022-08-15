import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = 'Irina'

  // Using a hook use State, hook is a special function that does
  // certain job
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
  const [blogs, setBlog] = useState ([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/>
      {/* <p>{name} is {age} years old</p>
      <button onClick={ handleClick }>Click me</button> */}

      {/* <button onClick={(e) => handleClick("Irina", e)}>Click me</button> */}
    </div>
  );
}

export default Home;
