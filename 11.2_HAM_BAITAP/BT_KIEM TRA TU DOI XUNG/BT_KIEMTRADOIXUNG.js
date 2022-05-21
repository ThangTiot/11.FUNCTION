function isPalindrome(s) {
    let l = s.length - 1
    if (s[0] === s[l]) {
        s.pop()
        s.shift()
    } else {
        return 1
    }
    if (s.length===0 || s.length===1) {
        return 2
    } else {
        isPalindrome(s)
    }
}

function run() {
    let str = prompt("Nhap vao chuoi kiem tra: ").split("")
    alert(isPalindrome(str))
}