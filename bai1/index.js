let arr = [5,6,-7,-8,3,2];

let max = 0;

function handleArr(){
    for(let i = 0; i< arr.length; i++ ){
        if(arr[i] * arr[i+1] > max){
            max = arr[i] * arr[i+1];
        }
    }
    console.log(max);
}
handleArr(arr)