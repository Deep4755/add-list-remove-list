const add = document.querySelector('#add')
const remove = document.querySelector('#remove')
const inp = document.querySelector('input');
const ul = document.querySelector('ul')

var li 
add.addEventListener('click', function(){

    if (inp.value.trim()===''){

    }else{
        li = document.createElement('li');
        li.textContent= inp.value;
        ul.appendChild(li);
        inp.value='';
    }


})

remove.addEventListener('click', function(){
    // while (ul.firstChild) {
    //     ul.removeChild(ul.firstChild);}
    // ul.removeChild(li);
    // ul.innerHTML = '';
    if (ul.lastChild) { // Check if there are items in the list
        ul.removeChild(ul.lastChild);
    }


})