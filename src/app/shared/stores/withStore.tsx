import React from 'react';
import { StoreContext } from '../../../App';

export default function withStore(Component: any) {
    return function WrapperComponent(props: any) {
        return (
            <StoreContext.Consumer>
                {rootStore => <Component {...props} rootStore={rootStore} />}
            </StoreContext.Consumer>
        );
    };
}
