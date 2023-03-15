
function getEleAll(selector){
    return document.querySelectorAll(selector);
}
function getEle(selector){
    return document.querySelector(selector);
}
var tabs = getEleAll('.tab-item');

const line = getEle('.tabs .line');
const isActive = getEle('.tab-item.active');
const panel = getEleAll('.tab-pane');
// const panelActive = getEle('.tab-pane.active')
// console.log(panelActive)
//Tạo độ dài cho line của tab active
line.style.left = isActive.offsetLeft + 'px' ;
line.style.width = isActive.offsetWidth + 'px' ;


const active= getEle('.tab-item.active');

tabs.forEach((tab,index) => {
    var tabPanel = panel[index];
    
    tab.onclick= function(){
        
        // tab.classList.add('active');
        getEle('.tab-pane.active').classList.remove('active');
        isActive.classList.remove('active');
        
        line.style.left = tab.offsetLeft + 'px' ;
        line.style.width = tab.offsetWidth + 'px' ;

        tab.classList.add('active');
        tabPanel.classList.add('active');


    }
 })
