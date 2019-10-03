import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

const PageNotFound = inject('rootStore')(
  observer(
    class extends Component {
      render() {
        return (
          <div className='PageNotFound'>
            <h1>Page Not Found</h1>
          </div>
        );
      }
    }
  )
);

export default PageNotFound;
