import '../webpack05/layer/common.css';
import Layer from "../webpack05/layer/layer.js";

const App = function(){
    var dom = document.getElementById('appdiv');
    var layer = new Layer;
    dom.innerHTML=layer.ejstpl;
};
new App();