// class Parent{
//     constructor(){
       
//     }
    
// }

// class test extends Parent{
//     constructor(){
//         super();
//         this.name="xiaoqian";
//     }

//     handler(){
//         console.log(this);
//         return "dp";
//     }
//     getName(){
//         console.log(this.handler());
//     }
// }

// console.log(Object.getPrototypeOf(test));

// 快排
// function Qsort(arr,low,high){
//     var prio;
//     if(low<high){
//         prio=partation(arr,low,high);
//         Qsort(arr,low,prio-1);
//         Qsort(arr,prio+1,high);
//     }
// }
function swap(arr,i,j){
    var tmp=arr[i];
    arr[i]=arr[j];
    arr[j]=tmp;
}
// function partation(arr,low,high){
//     var key=arr[low];
//     while(low<high){
//         while(low<high && arr[high]>=key){
//             high--;
//         }
//         swap(arr,low,high);
//         while(low<high && arr[low]<=key){
//             low++;
//         }
//         swap(arr,low,high);
//     }
//     return low;
// }
// var arr=[10,8,5,3,2,9,23];
// Qsort(arr,0,6);
// console.log(arr);

// 快排2
function fSort(arr,start,end){
    if(start>=end){
        return;
    }
    var key=arr[start];
    var i=start,j=start;
    var k=end;
    while(i<=k){
        if(arr[i]<key){
            swap(arr,i,j);
            i++;
            j++;
        }
        else if(arr[i]>key){
            swap(arr,i,k);
            k--;
        }
        else{
            i++;
        }
    }
    fSort(arr,start,j);
    fSort(arr,k+1,end);
}
var arr=[10,8,5,3,2,9,23];
fSort(arr,0,6);
console.log(arr);
