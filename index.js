let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('style');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = '';
    let done=document.createElement("button");
    done.setAttribute("type","submit");
    done.setAttribute("value","done");
    done.classList.add("done");
    done.innerHTML="done";
    paragraph.appendChild(done);
    let remove=document.createElement("button");
    remove.classList.add("delete");
    remove.setAttribute("type","submit");
    remove.setAttribute("value","delete");
    remove.innerHTML="Delete";
    paragraph.appendChild(remove);

    done.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
        
    })
    remove.addEventListener('click', function(){
        remove.innerHTML="";
        done.innerHTML="";
        if(confirm('Delete ' + paragraph.innerText + '?')){
            toDoContainer.removeChild(paragraph);
        }
    })
})