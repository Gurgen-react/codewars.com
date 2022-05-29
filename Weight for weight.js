function orderWeight(strng) {
    //creat util, get sum from array element
    //also I can use reduce() and parsInt()
    function sum(n){
        let summa = 0
        let res = n.split('');
        res.forEach(element => {
           summa += Number(element)
        });   
        return summa
    }
    let resArr = strng.split(' ');
    resArr.sort((a, b) => sum(a) - sum(b) || (a>b) || -(a < b))
    return resArr.join(' ')
}
