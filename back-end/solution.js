var isPalindrome = function(s) {
    str="";
    for(var i=0;i<s.length;i++){
        str+=/^[A-Za-z0-9]*$/.test(s[i])?s[i]:"";
    }
    str = str.toLowerCase();
    for(var i=0;i<Math.trunc(str.length/2);i++){
        if(str[i]!=str[str.length-1-i]) {
            return false
        };
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))