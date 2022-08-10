// import _ from 'lodash';
// console.log(_.shuffle([1,2,3]));

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { Product } from './product.model';
import { validate } from 'class-validator';
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
];

const newProd = new Product('', -5);
validate(newProd);
console.log(newProd.getInformation());
// const p1 = new Product('A Book', 12.99);
// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
