export const uniqueFilter = (v,i,s)=>(v&&s.indexOf(v)===i);
export const nullAndUndefinedFilter = (v)=> v && v != "" && v!= "undefined";
export const getFrequencies = (arr) =>{
    let l = arr.length, result = {};
    while(l--){
        result[arr[l]] = result[arr[l]] ? ++result[arr[l]] : 1;
    }
    return result;
}
export const orderByFrequency = (arr) => Object.entries(getFrequencies(arr)).sort((a,b)=> b[1]-a[1]).map(a=>a[0]).filter(nullAndUndefinedFilter);

