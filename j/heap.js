var arr=[1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];

var len=arr.length;
heapSort(arr,len);
function heapSort(arr,len)
{
    var lrg=Math.floor(len/2)-1;
    // console.log(len);
    for(var i=lrg;i>=0;i--)
    {
        var l=(i*2)+1,r=(i*2)+2;
        // console.log(l+"-"+r);
        if(arr[l]>arr[r] || r>=len)
        {
            if(arr[i]<arr[l])
            {
                temp=arr[i];
                arr[i]=arr[l];
                arr[l]=temp;
            }
        }
        else if(r<len)
        {
            if(arr[i]<arr[r])
            {
                temp=arr[i];
                arr[i]=arr[r];
                arr[r]=temp;
            }
        }
    }
    // console.log(arr);
    len-=1;
    temp=arr[len];
    arr[len]=arr[0];
    arr[0]=temp;
    // console.log("---"+arr);
    if(len>1)
    {
        heapSort(arr,len);
    }
    else
    {

    }
}
console.log(arr);