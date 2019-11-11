const nameTextElement = document.querySelector('#setNameInput');
const yourNameElement = document.querySelector('#yourName');
const setNameButton = document.querySelector('#setNameButton');



nameTextElement.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    const newName = nameTextElement.value;

    yourNameElement.textContent = newName;
  }
}); 
//dont need this code


// yourNameElement.addEventListener('click', 'keypress' function() {
//     yourNameElement.remove();
// })

// yourNameElement.addEventListener('click', 'keypress', function() {
//     if(nameTextElement = '') {
//         yourNameElement.append(nameTextElement);
//     }
// })
setNameButton.addEventListener('click', function() {
    const newName = nameTextElement.value;

    yourNameElement.textContent=newName;
});



