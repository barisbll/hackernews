import './App.css';
import React from 'react';
import Container from './Components/Container.js';

//For top stories
//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

const DEFAULT_QUERY = 'react';

const PATH_BASE = `http://hn.algolia.com/api/v1/`;
const PATH_SEARCH = `search?`;
const PARAM_SEARCH = `query=`;

const url = `${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${DEFAULT_QUERY}`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    }

    this.setSearchTerm = this.setSearchTopStories.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({result});
  }

  componentDidMount() {
    const { searchTerm } = this.state;

    fetch(`${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${searchTerm}`)
        .then(response => response.json())
        .then(result => this.setSearchTopStories(result))
        .catch(err => err);
  }

  render() {

    const { result, searchTerm } = this.state;
    if(!result) return null;

    const containers = result.hits.map(e => (
      <Container pAuthor = {e._highlightResult.author.value} pTitle = {e._highlightResult.title.value} pURL = {e._highlightResult.url.value}  />
    ));

    
  return (
    <div className="App">
      <div className="search">
        <input type="text"></input>
        <button>Search</button>
      </div>
      <div className="container-result">
      {containers}
      </div>
    </div>
  );
}
}

export default App;
