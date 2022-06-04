// 2-Make a simple page with a button and do the following in order
// The body color of the screen changed to gray
// Write a function that takes the page address by clicking the button and adds it to the end of the 
// contact us and changes the page address to the new address
// Creates a function called addElement Make a paragraph and add it to the page ‌body with paragraph orders
// Add Hi Javascript text inside div with DOM orders
// create table to body by DOM

// function changeColor(){
//     document.body.style.background = 'gray';
// }
function pageAddress(){
    let address = window.location.pathname;
    console.log(address);
    address += '/contactus';
    const add = document.createElement('a');
    add.textContent = 'link to new Page';
    document.getElementById('address').appendChild(add);
    add.href = address;
}