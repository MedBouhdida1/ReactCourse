import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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
  const [SearchTerm, search] = useState("React")

  const searchesStories = list.filter(function (story) {
    return story.title.toLowerCase().includes(SearchTerm.toLowerCase())
  })
  const handleSearch = (event) => {
    search(event.target.value)
  }
  return (
    <div>
      <header className="App-header">
        <Search onSearch={handleSearch} />
        <p>{SearchTerm}</p>
        <List ff={searchesStories} />
      </header>

    </div >


  );
}

const List = (prop) => (

  <ul>
    {prop.ff.map((item) => (
      <Item key={item.objectID} aa={item} />
    ))}
  </ul>

);
const Item = (props) => (
  <li>
    <span>
      <a href={props.aa.url}>{props.aa.title}</a>
    </span>
    <span>{props.aa.author}</span>
    <span>{props.aa.num_comments}</span>
    <span>{props.aa.points}</span>
  </li>
);

function Search(props) {


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
      <input type="text" id="search" onChange={props.onSearch} onCopy={copy}></input>

    </div>
  )
}

export default App;
