import {Screens} from '../routing/screens';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const tabVissiblity: any = (screens: Screens[]) => (Route: any) => {
  const routeName = (getFocusedRouteNameFromRoute(Route) ?? '') as Screens;
  if (screens.includes(routeName)) {
    return {display: 'none'};
  }
  return;
};

export default tabVissiblity;
