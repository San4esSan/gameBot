'use strict';

// let inTagName = document.querySelector('.inTagName');
// let tagNameBtn = document.querySelector('.tagNameBtn');

// function DomElement(selector, height, width, bg, fontSize) {
//   this.selector = selector;
//   this.height = height;
//   this.width = width;
//   this.bg = bg;
//   this.fontSize = fontSize;
// }

// tagNameBtn.addEventListener('click', function () {
//   let newBlock = document.createElement('div');
//   document.body.appendChild(newBlock);

//   if (inTagName.value[0] === '.') {
//     newBlock.classList.add(inTagName.value.slice(1));
//   } else if (inTagName.value[0] === '#') {
//     newBlock.id = inTagName.value.slice(1);
//   }

//   newBlock.style.cssText = `
//     background-color: yellow;
//     width: 100px;
//     height: 100px;
//     text-align: center;
//   `;

// });


function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.NewDomElement = function () {
  let newBlock = document.createElement('div');
  document.body.appendChild(newBlock);

//   for (let key in this) {

//     if (this[key][0] === '.') {
//       newBlock.classList.add(this[key].slice(1));      

//     } else if (this[key][0] === '#') {
//       newBlock.id = (this[key].slice(1));
      
//     }

// newBlock.style.cssText = `
//         height: 100px;
//         width: 100px;
//         background-color: red;
//         font-size: 30px;
//       `;

// console.log(this[key]);
    // console.log('newBlock: ', newBlock);

  // }


const keys = Object.keys(this);
for (let key of keys) {
  // console.log(`key = ${key}, value = ${this[key]}`);
  newBlock.style.cssText = `
  ${key}: ${this[key]}
  `;

  if (key === 'selector' ){
    if(this[key][0] === '.') {
      newBlock.classList.add(this[key].slice(1));
    console.log(`${key}: ${this[key].slice(1)};`);
    } else if(this[key][0] === '#'){
      newBlock.id = (this[key].slice(1));
      console.log(`${key}: ${this[key].slice(1)};`);
    }
    
  } 
  else if (key === 'height' ){
    newBlock.style.cssText = `${this[key]};`;
    console.log(`${key}: ${this[key]};`);
  } 
  else if (key === 'width' ){
    newBlock.style.cssText = `${this[key]}`;
    console.log(`${key}: ${this[key]};`);
  }
  else if (key === 'bg' ){
    newBlock.style.cssText = `${this[key]}`;
    console.log(`background-color: ${this[key]};`);
  }
  else if (key === 'fontSize' ){
    newBlock.style.cssText = `${this[key]}`;
    console.log(`font-size: ${this[key]};`);
  }

}


};


let newB = new DomElement('.block', '200px', '200px', 'red', '22px');
console.log('newB: ', newB);
newB.NewDomElement();

let newB2 = new DomElement('#best', '200px', '200px', 'blue', '22px');
console.log('newB2: ', newB2);
newB2.NewDomElement();