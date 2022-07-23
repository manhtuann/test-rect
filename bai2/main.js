const arr = [60,40,55,75,64];
let sTeam1 = 0;
let sTeam2 = 0;
let result = [];
function sumArr(){
    for(let i = 0; i<arr.length; i++){
        if(i%2 == 0 ){
            sTeam1 +=arr[i]
        }
        else 
        sTeam2 += arr[i]
    }
    result.push(sTeam1,sTeam2)
    console.log(result);
}
sumArr(arr)