function newChange(){
    let paragraph = document.querySelector('p');
    paragraph.setAttribute('id' , 'first-paragraph');
    console.log(paragraph.getAttribute('id'));

    let inputValue = document.getElementById('greeting');
    inputValue.value = "Hello there";

    let colorDiv = document.getElementById('content').style.color;
    console.log(colorDiv);
    let splitColorDiv  = colorDiv.split(';')
    console.log(splitColorDiv[0]);

    let newClass = document.querySelector('div');
    newClass.setAttribute('class' , 'title');
}
newChange();