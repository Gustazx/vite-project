// Nullish Colescing Operator

// const idade = 3;

// 0, "", [], false, undefined, null => falsy

// Usa-se ?? para nao considera 0 ou "" como um valor não informado
// document.body.innerText = "Sua idade é " + (idade ?? "Não Informado");

// Objetos

// const user = {
//   name: "Diego",
//   nickname: "Gustavo",
//   age: 27,
//   address: {
//     street: "Rua teste",
//     number: 176,
//   },
// };

// Retorna true ou false ao localizar ou nao a chave "name" no objeto user
// document.body.innerText = "name" in user;

// Retorna as chaves do objeto
// document.body.innerText = Object.keys(user);

// Retorna os valores dentro do objeto
// document.body.innerText = JSON.stringify(Object.values(user));

// Retorna uma lista com os valores em formato de lista
// document.body.innerText = JSON.stringify(Object.entries(user));

// Desestruturação

// const address = user.adress;
// Ou
// const { address, idade } = user;
// Ou
// const { address, age: idade, nickname = "Gusta" } = user;
// document.body.innerText = JSON.stringify({ address, idade, nickname });

// function mostraIdade(user) {
//   return user.age;
// }
// OU
// function mostraIdade({ age }) {
//   return age;
// }

// Rest operator

// const { name, age, ...rest } = user;

// const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [num1, , num3, ...rest] = arrays;

// document.body.innerText = JSON.stringify({ num1, num3, rest });

// Short Syntax

// const name = "Gustavo";
// const age = 27;

// const user = {
//   name,
//   age,
// };

// document.body.innerText = JSON.stringify(user);

// Optional Chaining

// const user = {
//   name: "Diego",
//   age: 27,
//   address: {
//     street: "Rua teste",
//     number: 176,
//     zip: {
//       code: "8916000",
//       city: "Rio de janeiro",
//     },
//     showFullAddress() {
//       return "ok";
//     },
//   },
// };

// const key = "street";

// document.body.innerText = user[key];
// document.body.innerText = user.address[key];

// document.body.innerText = user.address?.showFullAddress?.();

// document.body.innerText = user.address?.zip?.code ?? "Não informado";

// Métodos de array

const array = [1, 2, 3, 4, 5, 6];

// for (const i of array) {
//   document.body.innerText += i;
// }

// const newArray = [];

// array.forEach((item) => {
//   newArray.push(item * 2);
// });

// array.forEach((item) => {
//   document.body.innerText += item;
// });

// const newArray = array.map((item) => {
//   if (item % 2 == 0) {
//     return item * 10;
//   }
//   return item;
// });

// const newArray = array.filter((item) => item % 2 !== 0);

// const newArray = array
//   .filter((item) => item % 2 !== 0)
//   .map((item) => item * 10);

// const todosItensSaoNumeros = array.every((item) => typeof item === "number");

// const peloMenosUmItemNaoEUmNumero = array.some((item) => {
//   return typeof item !== "number";
// });

// const par = array.find((item) => item % 2 === 0);
// const posicaoPar = array.findIndex((item) => item % 2 === 0);

// const soma = array.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// document.body.innerText = JSON.stringify(soma);

// Template Literals

// const name = "Gustavo";
// const message = `Bem-vindo, ${name ? name : "Visitante"}`;

// Promises

// const somaDoisNumeros = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// somaDoisNumeros(1, 3)
//   .then((soma) => {
//     document.body.innerText = soma;
//   })
//   .catch((error) => {
//     document.body.innerText = "Erro";
//   });

// .then/.catch

// async function searchData() {
//   try {
//     const response = await fetch("https://api.github.com/users/Gustazx");
//     const body = await response.json();
//     return body.login;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("deu");
//   }
// }
// searchData().then((name) => {
//   console.log(name);
// });

// Named export

// import { soma, sub, PI } from "./lib/math.js"
// import { sum } from "./lib/sum.js";
// console.log(sum(1, 2));

// console.log(soma(1, 5));
// console.log(sub(1, 5));
// console.log(PI);

import { sub as tst } from "./lib/math.js";
console.log(tst(1, 2));
// import * as math from "./lib/math.js";

// console.log(math.soma(1, 2));
// console.log(math.sub(1, 2));
// console.log(math.PI);
