function generateRandomNumbers(count, callback) {
    const numbers = Array.from({ length: count }, () => Math.floor(Math.random() * 100));
    return callback(numbers);
}
console.log(generateRandomNumbers(5, nums => nums));

// Yeh JavaScript function generateRandomNumbers ek random numbers ka array generate karta hai. Is function ka do parameters hain: count, jo yeh batata hai kitne random numbers chahiye, aur callback, jo ek function hai jise generated numbers ko process karne ke liye use kiya jata hai.

// Array Creation:


// Array.from({ length: count }, () => Math.floor(Math.random() * 100))
// Yeh line count ke length ka ek array banati hai, jisme har element ek random number hoga (0 se 99 tak). Math.random() ek random decimal number return karta hai (0 se 1 tak), jise 100 se multiply karke aur Math.floor() se round down karke integer banaya jata hai.

// Callback Function:

// return callback(numbers);
// Is line mein generated numbers ko callback function ko pass kiya jata hai aur jo bhi output milta hai, wo return hota hai.

// Console Output:

// console.log(generateRandomNumbers(5, nums => nums));
// Is code ka output ek array hoga jisme 5 random numbers honge. Jaise:

// [23, 45, 12, 67, 89]
// Example Output:
// Output har baar different hoga kyunki numbers random generate hote hain.

// Agar aap function ko run karte hain, toh aapko kuch is tarah ka output milega (actual numbers different honge har baar):

// [12, 34, 56, 78, 90]