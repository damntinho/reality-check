import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';

import About form '~/pages/About';

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        About,
    })
);

export default Routes;
