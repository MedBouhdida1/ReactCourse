import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// const title = "react"
// const welcome = {
//   greeting: "hey",
//   title: "React",
// };
// const list = [{
//   title: "react",
//   url: "https://reactjs.org",
//   author: "Jordan walke",
//   num_comments: 3,
//   points: 4,
//   objectID: 0,
// },
// {
//   title: "Redux",
//   url: "https://redux.js.org",
//   author: "Dan abramov , Andrew Clark",
//   num_comments: 2,
//   points: 4,
//   objectID: 1,
// }]

// const Avenger = 'https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png';

// const description = 'Tony Stark';

// function getTitle(title) {
//   return title;
// }



// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);


// const arrayLike={
//   length:3,
//   0:2,
//   1:3,
//   2:4,
// };
// console.log(Array.prototype.map.call(arrayLike,(x)=>x**2))

function App() {
  const list = [{
    title: "react",
    url: "https://reactjs.org",
    author: "Jordan walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan abramov , Andrew Clark",
    num_comments: 2,
    points: 4,
    objectID: 1,
  }]
  const [SearchTerm, search] = useState(localStorage.getItem("search") || 'React')
  const [stories, setStories] = useState(list)
  const searchesStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(SearchTerm.toLowerCase())
  })
  const handleRemoveStory = (item) => {
    const newStories = stories.filter((story) => item.objectID !== story.objectID)
    setStories(newStories)
  }
  useEffect(() => {
    localStorage.setItem('search', SearchTerm)
  }, [SearchTerm])

  const handleSearch = (event) => {
    search(event.target.value)
    localStorage.setItem('search', event.target.value)
  }
  return (
    <div>
      <header className="App-header">
        <InputWithLabel
          id="search"
          label="Search"
          value={SearchTerm}
          onInputChange={handleSearch}
        >Search :</InputWithLabel>
        {/* <Search search={SearchTerm} onSearch={handleSearch} /> */}
        <p>{SearchTerm}</p>
        <List ff={searchesStories} onRemoveItem={handleRemoveStory} />
      </header>

    </div >


  );
}


const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  children
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </>
);
const List = (prop) => (

  <ul>
    {prop.ff.map((item) => (
      <Item key={item.objectID} aa={item} onRemoveItem={prop.onRemoveItem} />
    ))}
  </ul>

);
const Item = ({ aa, onRemoveItem }) => {
  const handleRemoveitem = () => {
    onRemoveItem(aa)
  }
  return (
    <li>
      <span>
        <a href={aa.url}>{aa.title}</a>
      </span>
      <span>{aa.author}</span>
      <span>{aa.num_comments}</span>
      <span>{aa.points}</span>
      <span>
        <button type='button' onClick={handleRemoveitem}>remove</button>
      </span>
    </li>
  );
};


// If there is only one instruction, it should be enclosed in parentheses however if there is more than one instruction, we need to use curly braces and include a return statement.
const Search = (props) => {

  const { search, onSearch } = props
  //or with arrow function
  // const handlechange = (event) => {
  //   console.log(event.target.value)
  // }
  const copy = (eve) => {
    console.log("stop copying")
  }
  return (
    <div>
      <label htmlFor='search'>Search :</label>
      <input type="text" id="search" value={search} onChange={onSearch} onCopy={copy}></input>

    </div>
  )
}

export default App;
