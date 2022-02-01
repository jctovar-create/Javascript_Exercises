/*

//Array Callback Methods

const nums = [9,8,7,6,5,4,3,2,1];

// nums.forEach(function(item){
//     console.log(item);
// });

// nums.forEach(function(item){
//     console.log(`This is your number times 7: ${item * 7}`);
// });

// nums.forEach(function(item){
//     if(item % 2 === 0){
//         console.log(item);
//     }
// });

let square = function(x){
    console.log(x * x);
}

nums.forEach(square);


nums.forEach(function(item){
    console.log(item);
});

const numbers = [20,21,22,23,24,25,26,27];

numbers.forEach(function(item){
    console.log(item);
});

let printTriple = function(item){
    console.log(item * 3);
}

numbers.forEach(printTriple);
 

//More complex example 

const books = [
    {
        title:'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title:'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
]

//console.log(books[0].authors[1]);

books.forEach(function(book){
    console.log(book.title);
});

books.forEach(function(book){
    if(book.authors.length > 1){
        for(i in book.authors){
            console.log(book.authors[i]);
        }
    }
    else{
        console.log(book.authors[0]);
    }
}); 

const numbers = [20,21,22,23,24,25,26,27];

numbers.forEach(function(num, index){
    console.log(index + ' is holding value ' + num);
})


//MAP - Create new array from existing array

const numbers = [20,21,22,23,24,25,26,27];

//console.log(numbers.map( x => x * 4));

let timesTwo = numbers.map(function(item){
    return item * 2;
})

// console.log(timesTwo);

// let squaredNums = numbers.map(function(item, idx){
//     return (`Item at index ${idx} squared is ${item * item}`);
// });

// let printedOut = squaredNums.forEach(function(item){
//     return item;
//     console.log(item);
// });

// const texts = ['rofl', 'lol','omg'];

// const caps = texts.map(function(text){
//     console.log(text.toUpperCase());
// })

let numbersObject = numbers.map(function(item){
    console.log(item);
})

let numbersObject2 = numbers.map(function(elem){
    let isEven1;
    if(elem % 2 === 0){
        isEven1 = true;
    }
    else{
        isEven1 = false;
    }
    return {myNumber: elem, isEven:isEven1};
})

console.log(numbersObject2);

const numDetail = numbers.map(function(item){
    return {
        value: item,
        isEven: item % 2 === 0
    }
});

console.log(numDetail);



const words = ['asap', 'mods', 'beefy']

// let upperAndPeriod = words.map(function(item){
//     console.log(item);
// })

let upperAndPeriod = words.map(function(item){
    let newWord = item.toUpperCase();
    let finalWord = "";
    // for(let i = 0; i < finalWord.length; i++){
    //     //finalWord += finalWord[i].split('').join('.');

    // }
    for(let i=0; i<newWord.length; i++){
        finalWord += newWord.charAt(i) + '.';     
     }
    return finalWord;
});

console.log(upperAndPeriod);

let favoriteAdjustment = words.map(function(item){
    return item.toUpperCase().split('').join('.');
})

console.log(favoriteAdjustment);



//Arrow Functions

const square = (x) => {
    return x * x;
}

const multiply = (x,y) => {
    return x * y;
}

const addition = (x,y) => {return (x + y)};

const isEven = (num) => {
    return num % 2 === 0;
}

const greet = () => {
    console.log("Hi!");
}


//When you don't need the return keyboard

const isOdd = x => x % 2 === 1;

const square = x => (x * x);

const nums = [1,2,3,4,5,6,7,8,9]

const doubled = nums.map(x => x * 2);

const parityList = nums.map(function(n){
    if(n % 2 === 0){
        return "even";
    }
    else {
        return "Odd";
    }
})

const parityList2 = nums.map((n) => {
    if(n % 2 === 0){
        return "even";
    }
    else {
        return "Odd"
    }
})

const parityList3 = nums.map((n) => {
    return n % 2 === 0 ? 'even' : 'Odd'
});


//FIND - Built in Array Method
//This finds an element from an array
//this function needs to return true or false
//it only returns one element. Once it finds a match it stops


const movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
]

let movie = movies.find(element =>{
    return element.includes('Mrs.');
});

let movie2 = movies.find(movie => {return movie.indexOf('Mrs') === 0});

const books = [
    {
        title:'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title:'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
]

let book = books.find(title => {
    return title.title.indexOf('American') === 0;
});

let book2 = books.find(book => {
    return book.title.includes('Moscow');
});


//Filter allows us to filter out subsets of an array

let words = ['jshskeksks', 'Hahahahaha', 'this', 'merry christmas', 'nope', 'jc']

const result = words.filter(word => word.length > 6);

const nums = [1,2,3,4,5,6,7,8,9]

const newNumbers = nums.filter(nums => nums > 5);

const evens = nums.filter(nums => {
   return nums % 2 === 0
})

const odds = nums.filter(nums => nums % 2 === 1);

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

let highlyRatedBook = books.filter(rating => rating.rating > 4.3);

let fantasyBooks = books.filter(b => b.genres.includes('fantasy'));

let shortForm = books.filter(b => b.genres.includes('short stories'));

let query = 'The';
let theTitle = books.filter(b => {
    const title = b.title.toLowerCase();
    return title.includes(query.toLowerCase());
});



//EVERY & SOME
//Both are Boolean Methods

const array1 = [1, 30, 39, 29, 10, 13];

let isBelowThreshold = array1.every(t => t < 40);
let isAboveFreezing = array1.some(t => t > 12);

const words = ['dog', 'dig', 'log', 'bag', 'wag']

let areThreeLetters = words.every(w => w.length === 3);

const allEndInG = words.every(w => {
    const lastLetter = w.length - 1;
    return w[lastLetter] === 'g'
})

//SORT

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500]

const sortedPrices = prices.sort();
const sortedPrices2 = prices.slice().sort((a,b) => a - b);
const sortedPrices3 = prices.sort((a,b) => b - a);

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const sortedRatings = books.sort((a,b) => b.rating - a.rating);

// items.sort(function (a, b) {
//     return a.value - b.value;
//   });

const sortedRatings2 = books.sort().rating;

//REDUCE
//It takes an array of values and reduces them down to a single value

//Summing every element in an array
//it could be finding the maximum value
//tallying votes or tallying data into an array


//acc is accululator or total, it represents the total
//cur is the current value stores each individual element
let reducePractice = [3,5,7,9,11].reduce((acc, cur) => {
    return acc + cur;
})

const nums = [3,4,5,6,7]
const startingPoint = 99;

let multipliedTogether = nums.reduce((total, current) =>{
    return total * current;
});

//Adding in an initial value
let addingThemUp = nums.reduce((total, current) => {
    return total + current;
}, startingPoint)

let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73]

let topScore = grades.reduce((total, current) => {
    if(current > total){
        return current;
    }
    else{
        return total;
    }
})

let highScore = Math.max(...grades);

let lowScore = grades.reduce((low, current) => {
    if(low < current){
        return low;
    }
    else{
        return current;
    }
})

*/

//Tallying

const votes = ['a','y', 'y', 'n','y', 'a', 'n', 'y', 'n', 'n', 'y', 'n', 'y']

const tally = votes.reduce((tally, vote) =>{
    tally[vote] = (tally[vote] || 0) + 1;
    return tally;
}, {})