class MyString{
    reverse(thi){
        return thi.split('').reverse().join('')
    }
    ucFirst(thi){
        return thi[0].toUpperCase() + thi.slice(1)
    }
    ucWords(thi){
        let arr = thi.split(' ')
        let newArr = arr.map(el => el[0].toUpperCase() + el.slice(1))
        return newArr.join(' ')
    }
}
let str = new MyString()
console.log(str.reverse('abcde'))
console.log(str.ucFirst('abcde'))
console.log(str.ucWords('abcde abcde abcde'))