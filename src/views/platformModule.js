import Platform from 'react-native';

function platformModule() {
  
  this.url = function () {
    if (__DEV__) {
    	console.log("IN DEV");
    	var url = Platform.OS === 'ios' ? 'localhost:3000' : '10.0.2.2:3000'
    	console.log(url);
      return url;
    } else {
    // Production
      return '38.88.75.57';
    }
  }
}

module.exports = platformModule;