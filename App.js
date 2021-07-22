import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainPage from './src/screens/MainPage';

const navigator = createStackNavigator(
  {
    Main: MainPage,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'Evil Eye',
    },
  }
);

export default createAppContainer(navigator);