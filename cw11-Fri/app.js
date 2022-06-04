// 1-Create a function clear(elem) that removes everything from the element.
function clear(){
    const e = document.getElementById('elem');
    e.remove();
}
setTimeout(() =>  clear(), 1000);
