const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ];
const startingAmount = 0
  const total = orders.reduce(function(accumulator, current){

      return accumulator + current.amount;
  }, startingAmount)
  console.log(total);

//   2. Increment by 1

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

const add = arrayOfNumbers.map((increment) => {return increment + 1})
console.log(add)

// 3. Filter Evens

let filterEvens = (arr) => {
    const even = arr.filter((evenNum) => {
        if (evenNum % 2 === 0) {
            return true;
        }
    })

    return even
}
console.log(filterEvens([1,2,3,11,12,13]))
console.log(filterEvens([22,2,31,110,6,13]))

// 4. Filter Friends

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (array, string) => {
   const itemFilter =  array.filter(function (items) { if (items.includes(string)) {
        return true;
    }
        
    })
    return itemFilter;
}
console.log(filterItems(friends, 'ka'));
// 5. Sum Up


function sum(arr) {
    
    const total1 = arr.reduce(function (accumulator, current) {
      return accumulator
       + current;  
    })
    return total1
}
console.log(sum([1,2,3,4,5]))
console.log(sum([6,7,7]))


// 6. Square Root

const arrayOfNumber = [4,44,6,91,999]

const Square = arrayOfNumber.map(function (squ) { return Math.sqrt(squ)
    
})
console.log(Square);



