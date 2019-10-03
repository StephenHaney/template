import React from 'react';

import PageHome from '../../features/pages/Home.page';
import PageNotFound from '../../features/pages/NotFound.page';

const viewMap = {
  notFound: <PageNotFound />,
  home: <PageHome />
};

export { viewMap };
