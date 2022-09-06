'use strict'

/*  Добавляем и удаляем переменные в обьекте
const myCity = {
    city: ' Poltava ',
    ride: {
        a:20,
        b:10,
    }
}
const newElementOfMyCity = 'restorant';          //создаем новую переменную
myCity.ride [newElementOfMyCity] = 'Kioto Bar';       // добавляем переменную в обьект myCity , присваивая значение 'Kioto Bar'
delete myCity.city;                                  // удаляем елемент обьекта (точечный)
console.table(myCity);
console.log (myCity.ride.b);

*/

/* Вносим переменные в обьект , заранее задав им значения
const myName = 'Roman';                        // Даем значения 2м переменным
const postQty = 35 ;
const userProfile = {                         
    myName: myName,                            // вносим их в обьект, через имя переменной
    postQty: postQty,
    hasSigmentAgreement: false
}
console.table (userProfile);      

const myName = 'Roman';                        // то-же самое , но сокращенный синтаксис
const postQty = 35 ;
const userProfile = {                         
    myName,                            // вносим их в обьект, через имя переменной
    postQty,
    hasSigmentAgreement: false
}
console.table (userProfile);                 */  

/* ГЛОБАЛЬНЫЕ ОБЬЕКТЫ :
  WINDOW    &     GLOBAL  
   унифицированый глобальный обьект - globalThis  */

/* Методы обьекта . 
const myCity = {
    region: 'Ognivka',                                 // просто свойство обьекта
    massage: function(){                               // методом называется вункция в обьекте
        console.log('Hello , Amigo');
    }
}
myCity.massage();     

 //сокращенный синтаксис метода 


const myCity = {
    region: 'Ognivka',
    massage() {
        console.log('Hello , Amigo'); 
    }
}
myCity.massage();
*/


/* JSON -   JAVASCRIPT OBJECT NOTATION - формат обмена данными в сети
JSON.parse  // парсит JSON в JS обьект
JSON.stringify // JS обьект переводит в строку JSON */

/* МУТАЦИИ , как избежать
   // ВАРИАНТ 1 -  const copyPerson = Object.assign ({},person)

 const person = {
    name: 'Roman',
    age: 35
 }
 const copyPerson = Object.assign ({},person); // КОПИРУЕМ обьект персон в переменную копиПерсон
 copyPerson.age = 36;      // теперь так мы меняем свойство у копии , а не по ссылке 
 console.table(person);
 console.table(copyPerson);    //но это не сохраняет вложеные обьекты
  

   // ВАРИАНТ 2
   const person = {
    name: 'Roman',
    age: 35
   }
   const newPerson = {...person}   // ...-оператор разделения обьекта на свойства
   newPerson.age = 37;
   console.table (person);
   console.table (newPerson);  // тоже не предохраняет от изменения ссылок 
   
  // ВАРИАНТ 3 

   const person = {
    name: 'Roman',
    age: 35
   }
   const persoUpdate = JSON.parse(JSON.stringify(person));  //переводим обьект в строку , и потом обратно в обьект
   persoUpdate.family = " Dother";
   persoUpdate.familyMemberName = "Alis";

   console.table (person);
   console.table (persoUpdate);  //таким способом защищаем ссылки от мутации
   */

/* ФУНКЦИИ - блок кода , которые можем выполнять многократно 

function summ(a,b) {
    const c=a+b;
    console.log(c)
}
summ(45,15);
summ(2,1);
summ(4,5);  */

/* ВИДЫ ФУНКЦИЙ - именованная , присвоена переменной , анонимной ,
                   аргументом  при вызове другой функции, 
                     значением свойства(метода)обьекта 
              
 const summ= function (a, b) {
    let c;
    a += 1;
    c = a+b;
    return c
}           

console.log(summ(1,2))        */

/* ВЗАИМОДЕЙСТВИЕ ФУНКЦИЙ С ВНЕШНИМИ ОБЬЕКТАМИ 
  //1. функция меняет обьект , так как идет по ссылке к нему НЕ РЕКОМЕНДУЕТСЯ!!
const personOne = {
    name: 'Bob',
    age: 26
}
function increaseAge(person) {
    personOne.age +=1;
    return person    
}

increaseAge(personOne);
console.table(personOne);  
 //2. Функция создает копию обьекта не меняет обьект, а меняет копию
 const personOne = {
    name: 'Bob',
    age: 22
 }

function increaseAge(personUpdate) {
    const ageUpPerson=JSON.parse(JSON.stringify(personOne));
    ageUpPerson.age +=1;
    return ageUpPerson
}
console.log (increaseAge(personOne));
console.log (personOne)  */

/* CALL BACK FUNCTION 
// Это функция , которая вызывается внутри другой функции

function anotherFunction() {   //это и есть коллбек функция,так как она вызывается , только как аргумент в другую фцию
    // do
}

function fnWithCallback(callbackFunction) {
    callbackFunction();
}
fnWithCallback(anotherFunction);  
// пример callback function :

function printMyName() {
    console.log('Dart Veider');
}
console.log('start');
setTimeout(printMyName,2000); // setTimeout - встроеная фция (название фции, время)

*/

/* ПРАВИЛА РАБОТЫ С ФУНКЦИЯМИ 
   1. Называть функции исходя из выполняумых задач.
   2. Одна функция = 1 выполняемая задача
   3. Не рекомендуется изменять внешние переменные
      (относительно функции)
   4.
*/

/*ОБЛАСТИ ВИДИМОСТИ 
 Глобальная и локальная области видимости

let a;
let b;
function myFn () {
    let b;           //Создает b в локальной области и меняет ее-же
    a = false;      // так , как в локальной нет а , то дает значение глобальной а
    b= 35;
    console.log(b)
}

myFn();
console.log(a);
console.log(b);
 */ 

/* ПРАВИЛА РАБОТЫ С ПЕРЕМЕННЫМИ 
  1. Все переменные назначать перед их использ.
  2 Приоритет const
  3 Внутри функции не изменять елементы с внешних обл.видимости 
    применять внутри функции переменные                           */    

/* СТРОГИЙ РЕЖИМ 
   В начале кода написать 'use strict'
   *ЗАПРЕЩАЕТ использование необьявленных переменных
*/

/* ОПЕРАТОРЫ 

const a = {};
console.log(!!a); 

// console.log ( false || null)  

const button = { 
    width: 200,
    text: 'Buy'
}
const redButton = {
    ...button,   // разделяем обьект на свойства
    color: 'red'
}

console.table (redButton);    

const object = {
    name: 'Roman',
    sername: 'Sled',
    age: 35,
    work: 'Su chief'
}

const updateObject = {
    ...object,              //... - оператор разделения на свойства
    work: 'Chief'    
} 
delete object.age          // deleting age from object
console.table(object)
console.table(updateObject)  


const buttonInfo = {
    text: 'Buy',
    heigth: 630
}
const buttonStyle = {
    color: 'yellow',
    width: 200,
    heigth: 300
}

const button = { 
    ...buttonStyle,  //важен порядок записи (heigth 300 перезаписали на 630)
    ...buttonInfo    
}
console.table(button)   */

/* КОНКАТЕНАЦИЯ СТРОК 
// example 1
console.log('Hello '+'World')
// example 2
const massage1= 'Hello';
const massage2= 'World';
const fullMassage = massage1+' '+massage2
console.log(fullMassage)
//example 3  Template string literal - Шаблонные строки
const templateStringLiteral = `${massage1} ${massage2}`;
console.log(templateStringLiteral)
*/

/* ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ 
//обьявленная функция 
function myFn (a,b) {   // у такой фции есть имя , параметры и тело
    let c;
    a +=1;
    c = a+b;
    return c
}

// функциональное выражение - ВСЕГДА АНОНИМНЫЕ, нельзя использ. автономно
// 
function(a,b) {          // нет имени , есть параметры и тело
    let c;
    a +=1;
    c = a + b;
    return c
}    

// ПРИМЕР ВУНКЦИОНАЛЬНОГО ВЫРАЖЕНИЯ :
//1. example1
// присваиваем анонимное функциональное выражение переменной
const myFunction = function(a,b) {
    let c;
    a += 1;
    c=a+b;
    return c
}
console.log(myFunction(5,3))   
//2. пример 2 - анонимное функциональное выражение в вызове другой ф-ции(колл бек фция)

setTimeout(function() {
    console.log('You see this messege after 2 seconds while start a code')
},1900);
 */

/* СТРЕЛОЧНЫЕ ФУНКЦИИ 

(a,b) => {             // у стрелочной фции (=>) нет имени
    let c;
    a +=1;
    c= a+b;
    return c
}  
// Стрелочные функции - анонимные. Даем ей имя , присвоив переменную
const arowFn = (a,b) => {
    let c;
    a +=1;
    c=a+b;
    return c
}
console.log(arowFn(5,3))

// ИСПОЛЬЗОВАНИЕ СТРЕЛОЧНОЙ ФУНКЦИИ В ДРУГОЙ ФЦИИ (КОЛЛБЕК)

setTimeout (()=> {
    console.log (' 2 sec timig message') 
}, 2000)  

//СОКРАЩАЕМ СИТНАКСИС В СТРЕЛОЧНЫХ ФЦИЯХ
//1. Если 1н параметр (а)
(a) => {
    // functuion body
}

//2. ФИГУРНЫЕ скобки можно упустить , если в теле фции только 1но выражение
(a,b) => a+b  // возвращает НЕ ЯВНОЕ значение , так как return выполняется автоматически.

*/

/* ЗНАЧЕНИЯ ПАРАМЕТРОВ ФУНКЦИИ ПО УМОЛЧАНИЮ 
//1 пример
const multByFactor = (value, multiplier=1) => value*multiplier  // назначили дефолтное значение для мультиплаера
console.log(multByFactor(100));  // Если задаем 1н параметр функции , то он задается в value так, как multiplier мы задали
console.log(multByFactor(2,5));

//2 пример ({})  - НЕ ЯВНЫЙ ВОЗВРАТ ОБЬЕКТА - скобки кругл

const newPost = (post, addedAt = Date()) => ({  //КРУГЛЫЕ СКОБКИ чтобы вернуть обьект в функцию
    ...post,
    addedAt
})
const firstPost = {
    id: 1,
    author: 'Roman'
}

console.table(newPost(firstPost))  
// Тот же пример , только с явним возвратом (без скобок)
const newPost = (post, addedAt = Date ()) => {
    let a= {
    ...post,
    addedAt
   }
   return a
}
const firstPost = {
    id: 1,
    author: 'Roman'
}
console.table(newPost(firstPost));  */

/* !!!!!!!!!!!!!!! !!! ОБРАБОТКА ОШИБОК В JS */ 
/* UNCAUGHT ERROR - не пойманая ошибка 
const fnWithError = () => {
    throw new Error ('Something going WRONG')
}
fnWithError();
console.log(' We catch this ERROR');
*/
/*Как бороться - try  catch 
try {
    //Проблемный блок кода , который будет выполняться
} catch (error) {
    // этот блок будет выполняться, если возникнут ошибки в блоке catch
}

const fnWithError = () => {
    throw new Error ('Something going WRONG')
}
try {
    fnWithError()
} catch (error) {
    console.error(error);
    console.log(error.message)
}

console.log ('But we catch this ERROR :)')
*/

/* ИНСТРУКЦИИ 
// Выражение возвращает значение
// Инструкция выполняет действие

let a;                    //инструкция 1
const b = 5;              //инструкция 2
if (a>b) {                //инструкция 3
    console.log(`a=${a} larger b=${b}`)
}
*/

// Выражение может быть инструкцией

// 'abc';
// a = a + 3;
// c = a+b ;
// d ='Good' + 'Evening';
// myFunction(c,d);
// console.log('Hey');

/* МАССИВЫ - это обект 
const myArray = [1,2,3,4,5];
console.log(myArray);
console.log('Длинна массива ',myArray.length);
*/
/* МЕТОДЫ МАССИВОВ 
 // push  -- добавляет элемент в конец массива
 const myArray = [1,2,3,4,5];
 myArray.push('Roma');  // добавит с конца строку , теперь длинна масива +1
 console.log(myArray);

 // pop -  удаляет последний элемент в массиве
 myArray.pop();    //удалили последний елемент массива - строку "Рома"
 console.log(myArray);
 // если присвоить метод рор переменной , то она сохранит "вырезаный" елемент массива себе(не в новый массив)
 const popArray = myArray.pop();
 console.log(myArray);
 console.log(popArray);
 
 // unshift - добавляет элемент в начало массива
 // shift - удаляет 1й элемент в массиве и возвразает его значение
 // forEach - перебирает все єлементы массива !!!! НЕ МЕНЯЕТ ОРИГИНАЛЬНЫЙ МАССИВ!!!
   //  возвращает undefiended

 const myArray = [1,2,3,4];
 console.log(myArray);

 myArray.forEach(fn => console.log(fn*2));
 console.log(myArray);

 const boostArray=[];
 myArray.forEach(fn => {
    fn=fn*2;
    boostArray.push(fn)
 })
 console.log(myArray);
 console.log(boostArray);

 
 // map -- как и forEach - перебирает все елементі массива , но возвращает новый массив
 const myArray = [1,2,3];
 console.log(myArray);

 const newArray = myArray.map ( fn => fn*3) ;
 console.log(newArray);
 console.log(myArray);

 */

 /* ДЕСТРУКТУРИЗАЦИЯ */