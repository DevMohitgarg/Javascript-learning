//tail recursion
// function abc(i){
//     if(i==0)return;
//     console.log(i);
//     abc(i-1);
// }
// let i=10;
// abc(i);

//head recursion
function abc(i){
    if(i==10)return;
    console.log(i);
    abc(i+1);
}
let i=0;
abc(i);