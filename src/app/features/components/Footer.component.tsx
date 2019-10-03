import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

const Footer = inject('rootStore')(
  observer(
    class extends Component {
      render() {
        return (
          <div className='Footer'>
            <h1>Footer</h1>
          </div>
        );
      }
    }
  )
);

export default Footer;
