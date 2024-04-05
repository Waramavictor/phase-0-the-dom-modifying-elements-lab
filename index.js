// Write your code here!

const mainElement = document.querySelector('main#main');
mainElement.remove();


const newHeader = document.createElement('h1');


newHeader.id = 'victory';


const yourName = 'Victor Kinyua'; 
newHeader.innerHTML = `${yourName} is the champion`;


document.body.appendChild(newHeader);
