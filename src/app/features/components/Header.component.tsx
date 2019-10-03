import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

const Header = inject('rootStore')(
  observer(
    class extends Component {
      render() {
        return (
          <div className='Header'>
            <h1>Header</h1>
          </div>
        );
      }
    }
  )
);

export default Header;
