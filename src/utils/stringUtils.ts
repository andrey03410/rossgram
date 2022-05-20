export function checkRegex(str : string, regexp : RegExp) : boolean{
    for(let i = 0; i < str.length; ++i){
        if(!regexp.exec(str[i])){
            return true
        }
    }
    return false
}
