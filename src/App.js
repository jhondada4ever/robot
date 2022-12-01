//import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import * as React from "react";
import CardList from "./components/cardList";
import { robots } from "./components/robots";
import SearchBox from "./components/SearchBox";

// const title = "Blog post";
// const body = "this is my body";

// let comments = [
//   { index: 1, text: "coment body" },
//   { index: 2, text: "coment body" },
//   { index: 4, text: "coment body" },
// ];

// const loading = false;
// const showComments = false;

// function App() {
//   //return <div className="container"></div>;
//   return <div className="container">Default Text</div>;
// }
// export default App;

//using the class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    console.log(event.target);
    console.log(event.target.value);

    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    //return <div className="container"></div>;
    return (
      <div className="tc">
        <h1> Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <div className="container">
          {/* <h1>Default Text</h1> */}
          <CardList robots={filteredRobots} />
        </div>
      </div>
    );
  }
}
export default App;

// import * as React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
