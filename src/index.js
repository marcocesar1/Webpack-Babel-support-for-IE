import "@babel/polyfill";
import Home from './templates/Home';
import './styles/global.scss';
import './styles/app.scss';

(async function(){

    const root = document.createElement('div');
    root.setAttribute('class', 'home');
    root.innerHTML += await Home();
    document.body.appendChild(root);
    
})();