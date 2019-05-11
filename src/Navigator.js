import { createStackNavigator, createAppContainer } from 'react-navigation';

import { ListScreen, RepositoryScreen } from './screens';
import { colors } from './variables';

const NavigatorScreen = createStackNavigator(
  {
    List: ListScreen,
    Repository: RepositoryScreen,
  },
  {
    initialRouteName: 'List',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: colors.WHITE,
    },
  },
);

export default createAppContainer(NavigatorScreen);
