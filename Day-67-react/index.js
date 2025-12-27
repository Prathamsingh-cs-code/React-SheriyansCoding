// var h1 = React.createElement('h1', null, 'Hello, React!');
// var h2 = React.createElement('h2', null, 'Welcome to React!');
// var root = ReactDOM.createRoot(document.querySelector('#container'));
// var div = React.createElement('div', {id: 'myDiv'}, [h1 , h2]);
// root.render(div);
import box from './app.js';

var root = ReactDOM.createRoot(document.querySelector('#container'));
root.render(box());