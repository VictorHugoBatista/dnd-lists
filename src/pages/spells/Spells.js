import React from 'react';
import ListDefault from '../../components/lists/ListDefault';

class Spells extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          name: 'Lorem ipsum dolor sit amet, consecteur',
          url: 'http://google.com',
        },
        {
          name: 'Lorem ipsum dolor sit amet, consecteur',
          url: 'http://google.com',
        },
        {
          name: 'Lorem ipsum dolor sit amet, consecteur',
          url: 'http://google.com',
        },
        {
          name: 'Lorem ipsum dolor sit amet, consecteur',
          url: 'http://google.com',
        },
        {
          name: 'Lorem ipsum dolor sit amet, consecteur',
          url: 'http://google.com',
        },
      ],
    };
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
