/*
let num = 1, num2, num 3 = "tres";
const array = [];

let array2 = ["star wars",
            123,
            true,
            1 + 2,
            {nombre: "Laura", edad:45},
            array3= [1, 2, 3],
            function(){}
            ],

console.log(array2[5][2]);

console.log(array2[4].edad);

console.log(array2.length);

let comidas = ["pastas", "ensalada", "hamburguesa", "milanesa", "pollo al horno", "pizza", "papas fritas"];

console.log ({comidas});

comidas.forEach((comidita, indice, array)=>{
console.log({comidita, indice, array});

})


const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector ("ul");
const empty =document.querySelector(".empty");

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();

const text = input.value;

if (text !==""){
    const li = document.createElement("li");
    const p = document.createElement("p");
    
p.textContent = text;
li.appendChild(p);
ul.appendChild(li);
li.appendChild(addDeleteBtn());

input.value = "";
empty.style.display = "none";

}

});

function addDeleteBtn () {

const deleteBtn = document.createSelector("button");

deleteBtn.textContent = "X";
deleteBtn.className = "btn-delete";
deleteBtn.addEventListener("click", (e)=>{

const item = e.target.parentElement;

ul.removeChild(item);

const items =document.querySelectorAll ("li");

if (items.length ===){
    empty.getElementsByClassName.display = "block";
}

});
return deleteBtn;

};
*/
let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}

