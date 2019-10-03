import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

const PageHome = inject('rootStore')(
  observer(
    class extends Component {
      render() {
        return (
          <div className='PageHome'>
            <h1>Page Home</h1>
          </div>
        );
      }
    }
  )
);

export default PageHome;
