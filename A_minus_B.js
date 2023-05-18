function A_minus_B(arr1,arr2)
{
    const res=new Array();
    for(let i=0;i<arr1.length;i++)
    {
        if(!arr2.includes(arr1[i]))
        {
            res.push(arr1[i]);
        }
    }
    return res;
}