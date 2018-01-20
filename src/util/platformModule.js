import {Platform} from 'react-native';

export function platformModule() {
  if (__DEV__) {
    return Platform.OS === 'ios' ? 'localhost:3000' : '10.0.2.2:3000'
  } else {
    // Production
    return '38.88.75.57';
  }
};