///BAI 1
function binhPhuong(a) {
    return Math.pow(a, 2)
}

function bai1() {
    let n = +prompt("Nhap vao so muon tinh binh phuong: ")
    let result = binhPhuong(n)
    alert("Binh phuong cua " + n + " la: " + result)
}

///BAI 2
function dienTich(a) {
    return Math.pow(a, 2) * Math.PI
}

function chuVi(a) {
    return 2 * a * Math.PI
}

function bai2() {
    let r = +prompt("Nhap vao ban kinh duong tron: ")
    let area = dienTich(r).toFixed(2)
    let cv = chuVi(r).toFixed(2)
    alert("Dien tich va chu vi hinh tron ban kinh " + r + " la: " + area + " va " + cv)
}

///BAI 3
function giaiThua(a) {
    if (a === 2) {
        return 2
    } else {
        return a * giaiThua(a - 1)
    }
}

function bai3() {
    let n = +prompt("Nhao vao so muon tinh giai thua: ")
    let result = giaiThua(n)
    alert("Giai thua cua " + n + "! la " + result)
}

///BAI 4
function isNumber(a) {
    return !isNaN(a)
}

function bai4() {
    let n = prompt("Kiem tra ki tu co phai so khong: ")
    alert(isNumber(n))
}

///BAI 5
function findMin(a,b,c) {
    let min
    if (a<b && a<c) {
        min = a
    } else if (b<c) {
        min = b
    } else {
        min = c
    }
    return min
}

function bai5() {
    let num1 = +prompt("Nhap vao gia tri thu 1: ")
    let num2 = +prompt("Nhap vao gia tri thu 2: ")
    let num3 = +prompt("Nhap vao gia tri thu 3: ")
    let result = findMin(num1,num2,num3)
    alert("Gia tri nho nhat la: " + result)
}

/// BAI 6
function timSoDuong(a) {
    if (a>0) {
        return true
    } else {
        return false
    }
}

function bai6() {
    let num = +prompt("So nhap vao co phai la so nguyen duong khong: ")
    let result = timSoDuong(num)
    alert(result)
}

///BAI 7
function changeLocation(a,b) {
    let temp = a
    a = b
    b = temp
    return "2 so sau khi doi cho la: " + a + " va " + b
}

function bai7() {
    let num1 = +prompt("Nhap vao so thu 1: ")
    let num2 = +prompt("Nhap vao so thu 2: ")
    let result = changeLocation(num1, num2)
    alert(result)
}

///BAI 8
function reverseArray(arr) {
    return arr.reverse()
}

function creatArr() {
    let data = prompt("Nhap vao cac phan tu cua mang:(Phan biet nhau bang dau cach)")
    let arr = data.split(" ")
    return arr
}

function bai8() {
    let  array = creatArr()
    let result = reverseArray(array).join(" ")
    alert("Mang sau khi dao nguoc la: " + result)
}

///BAI 9
function check(a,arr) {
    let count = 0
    for (let value of arr) {
        if (value===a) {
            count++
        }
    } if (count === 0) {
        count = -1
    }
    return count
}

function bai9() {
    let array = creatArr()
    let n = prompt("Nhap vao 1 ky tu bat ki: ")
    let result = check(n, array)
    if (result!==-1) {
        alert("So lan xuat hien cua ki tu trong mang la: " + result)
    } else {
        alert(result)
    }
}
