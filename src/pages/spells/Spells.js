import React from 'react';
import ListDefault from '../../components/lists/ListDefault';

class Spells extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('http://www.dnd5eapi.co/api/spells/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts: data.results });
      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <ListDefault items={this.state.posts} />
      </div>
    );
  }
}

export default Spells;
