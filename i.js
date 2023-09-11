const sumbit = document.querySelector ('#sumbit')
const text = document.querySelector ('#text');
const timedate = document.querySelector ('#timedate')
const List = document.querySelector ('.list-group')

sumbit.disabled = true;

function validateInputs() {
    const textValue = text.value;
    const timeValue = timedate.value;
    
    if (textValue.trim() !== '' && timeValue.trim() !== '') {
        sumbit.disabled = false;
        } else {
        sumbit.disabled = true;
        }
    }

    text.addEventListener('input', validateInputs);
    timedate.addEventListener('input', validateInputs);

sumbit.addEventListener ('click', function (event) {
        event.preventDefault();

        const textValue = text.value;
        const timeValue = timedate.value;

        const ListItem = document.createElement('a');        
        
        ListItem.classList.add('list-group-item' ,'list-group-item-action', 'd-flex' ,'justify-content-between', 'align-items-center')
        
        ListItem.innerHTML =`
        <div class= "mt-2">
            <small>${timeValue}</small>
            <p class="h3"> ${textValue} </p>            
        </div>
        <div class="btn-group " role="group" aria-label="Basic mixed styles example">
            <button type="button" class="delete btn btn-danger">Delete</button>
            <button type="button" class="edit btn btn-warning">Edit</button>
            <button type="button" class="done btn btn-success">Done</button>
        </div>
    </a>`;

        List.appendChild(ListItem)
        text.value = '';
        timedate.value = '';
        sumbit.disabled = true;    


        // button edit delete done 
        const edit = ListItem.querySelector('.edit');
        const done = ListItem.querySelector('.done');

        


        ListItem.querySelector('.delete').addEventListener('click',function(){
            ListItem.remove();
        })

        ListItem.querySelector('.done').addEventListener('click',function(){
            const p = ListItem.querySelector('p');
            const date = ListItem.querySelector('small')
            p.classList.add('text-decoration-line-through','text-success');
            date.innerHTML = '';
            edit.disabled = true;
            done.disabled = true;
        })

        ListItem.querySelector('.edit').addEventListener('click',function(){
            const textEdit = prompt('Edit text\n');

            const p = ListItem.querySelector('p');

            p.innerHTML = textEdit;
            
        })

    })


