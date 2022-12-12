const btn = document.getElementById('btn');

let index = 0;

const colors = ['darkblue', 'blue', 'lightblue', 'lightyellow', 'yellow', 'orange'];

btn.addEventListener('click', function onClick() {
  document.body.style.backgroundColor = colors[index];
  document.body.style.color = 'white';
    
   index = index >= colors.length - 1 ? 0 : index + 1;
});

// bagshaas asuuh