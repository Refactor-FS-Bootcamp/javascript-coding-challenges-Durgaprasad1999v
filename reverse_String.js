function reverseString(str)
{
    let ans="";
    for(let i=str.length-1;i>0;i--)
    {
        ans=ans+str.charAt(i);
    }
    return ans;
}