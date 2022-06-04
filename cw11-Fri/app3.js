// Creates a function called addElement Make a paragraph 
// and add it to the page ‌body with paragraph orders
function addElement(){
    let p = document.createElement('p');
    p.textContent = 'hello world';
    document.body.appendChild(p);
  
}
addElement();


// Add Hi Javascript text inside div with DOM orders

function addDiv(){
    let div = document.getElementById('row');
    div.textContent = 'Hi javascript';
}
setTimeout(() => document.getElementById('row').remove(), 2000);
addDiv();

// create table to body by DOM