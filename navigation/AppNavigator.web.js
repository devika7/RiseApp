import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';
import MyNavigation from '../screens/MyNavigation';

//import MainTabNavigator from './MainTabNavigator';


const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MyNavigation,
});
//switchNavigator.path = '';



export default createBrowserApp(switchNavigator, { history: 'hash' });
