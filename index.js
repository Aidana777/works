const obj = {
    name: 'John',
    age: 20 
};

console.log(obj); // { name: 'John', age: 20 }
const movie = {
    title: "The Dark Knight",
    year: "2009"
  };
  
  console.log(movie.year); 

  const basket = {
    number: "KN126",
    products: ["banana"]
  };
  basket.products.push('apple', 'water', 'orange')
  console.log(basket);

  const getObjectKeys={
    size:50,
    count: 3
  }


let keys=Object.keys(getObjectKeys);
console.log(keys)


const getObjectValues={
  size: 50,
   count: 3 
}
let values=Object.values(getObjectValues);
console.log(values)

const table = [
  { id: 1, title: "Book", amount: 2, price: 200 },
  { id: 2, title: "Pen", amount: 1, price: 50 },
  { id: 3, title: "Soda", amount: 3, price: 80 },
  { id: 4, title: "Oreo", amount: 4, price: 100 }
];
tableCheck(table);
let inter=Object.entries(table)
console.log(inter)
inter.map(([index, item])=>console.log(index,item));


