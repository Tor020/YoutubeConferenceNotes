

(function(window, document) {
//   let javaSect = document.querySelector('FunctionalJavaTalk');
//   let collapsible = document.querySelectorAll('h1');
   
//   collapsible[0].addEventListener('click', function (e) {
//     collapsible[0].nextElementSibling.classList.toggle('displayNone');
//   });  

// collapsible.addEventListener('click', toggleContent, false);

function toggleContent (event) {
  // this.nextElementSibling.classList.toggle('displayNone');
  let target = event.target;

  console.log(target);

  if(target === document.querySelector('h1'))
  console.log('ye');
    target.nextElementSibling.classList.toggle('displayNone');
}

let container = document.querySelector('.container');

container.addEventListener('click', toggleContent, false)





})(window, document);