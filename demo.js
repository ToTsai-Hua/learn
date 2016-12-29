'use strict';




// for (var i = 0; i < 3; i++){
//   haha:
//     for (var j = 0; j < 3; j++){
//       if (i === 1 && j === 1) continue haha;
//       console.log('i=' + i + ', j=' + j);
//     }
//   }


// var a =[];
// for (var i=0;i<5;i++){
//   if (i%2===0)continue;
//   for(var j=11;j<15;j+=2){
//     a.push(i,j);
//   }
//   console.log(i);
// }
// console.log(a);


// var a =0
// do{
//   console.log(1);
//   a+=1;
// }while(a<3);

// var a =0;
// while(a<10){
//   console.log('h');
//   a+=1;
//   if(a>=5) break;
// }


// var b=[];
// for (var i = 0; i < 10; i+=2) {
//   b.push(i);
//   if (i>=8)break;
// }
// console.log(b);


//
// for(var i=0;i<=10;i+=2){
//   console.log('i当前为：'+i);
//   b.push(i);
// }
// console.log(b);


// var a=10;
// console.log(a
//   ?'a has a value.'
//   :'a has no value.'
// );

// function even(arg){
//   return (arg % 2 === 0)?'是':'否';
// }
// console.log(even(6),even(1),even('a'));


// var m = 1;
// var n = 2;
// if (m !== 1);
// if (n === 2) console.log('hello');
// else console.log('world');


// let m=1,n=2;
// switch(m){
//   case 1:
//   console.log(1);
//   case 2:
//   console.log(2);
//   case 'a':
//   console.log(3);
//   default:
//   console.log(4);
// }


// let m=1,n=2;
// if (m===1){
//   if(n!==2){
//     console.log('first');
//   }else{
//     console.log('middle');
//   }
// }else{
//   console.log('second');
// }


// var 丶 =1;
// console.log(丶);

// var date = new Date('2015-01-01');
// console.log(date.toJSON());
// console.log(JSON.stringify(date));

// var o = {a: 1};
// var o = {a: {b: 1}};
// function f(key, value) {
//   if (typeof value === 'object') {
//     return {b: 3};
//   }
//   return value * 2;
// }
// console.log(JSON.stringify(o,f));

// var o = {a: {b: 1}};
// function f(key, value) {
//   console.log("["+ key +"]:" + value);
//   return value;
// }
// console.log(JSON.stringify(o, f));


// console.log(typeof(JSON.stringify(1)));

// console.log(Object.prototype.toString.call(2));
// console.log(Object.prototype.toString.call(true));
// console.log(Object.prototype.toString.call(Math));

// console.log((new Date()).toString());
//
// var o1 = new Object();
// console.log(o1.toString());
//
// var o = new Object();
// o.valueOf=function(){return 2;};
// console.log(1+o);
// console.log(Object.getPrototypeOf(o));

// console.log(6.3%3.1);
// console.log(6.3%3);
// console.log(6%3);

// console.log(typeof(1+''));

//
// (function f() {
//   // 'use strict';
//   eval('var foo = 123');
//   console.log(foo);
// })();



// function Person(name) {
//   var _age;
//   function setAge(n) {
//     _age = n;
//   }
//   function getAge() {
//     return _age;
//   }
//   return {
//     name: name,
//     getAge: getAge,
//     setAge: setAge
//   };
// }
// var p1 = Person('张三');
// p1.setAge(25);
// console.log(p1.getAge());



// var f1 = function() {
//   var n = 99;
//   function f2(){
//     console.log(n);
//   }
//   return f2;
// }
// var result = f1();
// result();

// function f(a,b){
//   arguments[0]=2;
//   arguments[1]=3;
//   return a+b;
// }
// f(4,5)

// function f(a, a){
//   console.log(a);
// }
// f(1,0)

// var obj = [1, 2, 3];
// function f(o){
//   o[1]=66;
//   o = [2, 3, 4];
// }
// f(obj);
// console.log(obj);

// var a =1;
// var f = function(){
//   console.log(a);
//   var a =2;
// }
// function g(aa){
//   return aa;
// }
// g(f);


// function square(x,y) {
//     return x;
// }
// console.log(square(3));
// console.log(square(undefined));


// function foo() {
//   var x = 1;
//   function bar() {
//     console.log(x);
//   }
//   return bar;
// }
// foo();
// var x = 2;
// var f = foo;
// f()

// var x = function () {
//   var a = 2;
//   console.log(a);
// };
// x()
// function y() {
//   x();
// }
// y(x);

// function f() {
//   a;
//   b;
//   c;
// }
// console.log(f.toString());

// var a = [1,2,3,];
// delete a[1]
// console.log(a.length);
// a.forEach(function (x) {
//   console.log('i' + '.' + x);
// })

//
// var a =[,,];
// // console.log(a[0]);
// // console.log(a[2]);
// // console.log(a[3]);
// delete a[1];
// console.log(a[1])
//
// var color=['green','red','blue'];
// color.forEach(function(clr){
//   console.log(clr);
// })

//倒序实现了.
// var a = [4, 3, 33];
// a.foo = true;
// var l = a.length;
// var b=[];
// while (l--) {
//   b.push(a[l]);
// }
// console.log(b);

// function Totsai(name){
//   this.name = name;
// }
// Totsai.prototype.email = function (){
//   return 'Name:'+this.name;
// }
// var totsai = new Totsai('tutu');
// for (var hha in totsai){
//   if (totsai.hasOwnProperty(hha)){
//     console.log(hha);
//   }
// }

// var o = {a: 1, b: 2, c: 3};
// var prop =[];
// var i = 0;
// for (prop[i++] in o);
// console.log(prop);
// console.log(prop[2]);


// var o = {a: 1, b: 2, c: 3};
// console.log(o.a);
// for (i in o){
//   console.log(i);
//
//   console.log(o[i]);
// }
// console.log(typeof i);
// console.log(typeof o);
// console.log(typeof o.a);
// console.log(typeof o.i);

// var o = {p:1}
// console.log('length' in o);

// function foo(x) {
//   if (x > 100) {
//     var tmp = x - 100;
//     console.log(tmp);
//   }
// }
// foo()


// var v = 1;
//
// function f(){
//   console.log(v);
//   var v = 2;
// }
// f() // 2
// console.log(v); // 1



// const a = function (){};
// console.log(a.toString())

// if (false){
//   var f= function (){};
// }
// f();


// const a = {
//   name:'totsai',
// }
// a.name = 'leo'
// a.email= 'cwchyj@139.com'
// console.log(a);
// console.log(a.name);
// a.#1= 2;
// console.log(a);
//静态方法。


// const a =2;
// a =3;
// console.log(a);


// const arr= [];
// function f(){
//   for (let i = 0; i < 5; i++) {
//     arr.push(function(){console.log(i)})
//   }
// }
// f()
// arr[3]()

// console.log(a);
// var a=2;

// function a(){console.log(1);}
// function b(){
//   a();
//   if(true){function a(){console.log(2);}}
// }
// b()

// {
//   var a =1;
//   var b =2;
// }
// console.log(a,b)

// for (var i =0;i<5;i++){}
// console.log(i)

// var a =1;
// function f(){
//   console.log(a);
// }
// f();
