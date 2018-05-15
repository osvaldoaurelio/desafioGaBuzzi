import Reactotron from 'reactotron-react-native';

const tron = Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

// para limpar a timeline do reactotron
  tron.clear();
// para usar console.tron.log(); 
// e assim ver log no debbug do reactotron  
  console.tron = tron; 
/**
 * >> adicionar ao app.js
 * import './config/Reactotron' //verificar caminho
 * >> digitar
 * $ yarn add reactotron-react-native --dev
 */
