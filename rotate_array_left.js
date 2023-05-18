function rotate(arr)
{
    let temp=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        arr[i]=arr[i-1];
    }
    arr[length-1]=temp;
    return arr;
}