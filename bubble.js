// Select the elements
const outerDiv = document.getElementById('outer');
const middleDiv = document.getElementById('middle');
const innerDiv = document.getElementById('inner');

// Add event listeners to each div to observe event bubbling
outerDiv.addEventListener('click', (event) => {
  alert('Outer DIV clicked!');
  console.log('Event on Outer Div');
});

middleDiv.addEventListener('click', (event) => {
  alert('Middle DIV clicked!');
  console.log('Event on Middle Div');
});

innerDiv.addEventListener('click', (event) => {
  alert('Inner DIV clicked!');
  console.log('Event on Inner Div');
});