import React from 'react';
import useStore from '../../shared/stores/useStore';
import { observer } from 'mobx-react';

const SomeFunctionalComponent = () => {
  const rootStore = useStore();

  return (
    <>
      <h2>I am a functional component with access to the RootStore.</h2>
      <p>The current page is: {rootStore.routerStore.getCurrentRoute().name}</p>
    </>
  )
}

export default observer(SomeFunctionalComponent);
