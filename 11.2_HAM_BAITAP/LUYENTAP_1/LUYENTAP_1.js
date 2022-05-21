/// BAI 1
function alertMessage () {
   alert("XIn chao")
}

///BAI 2
function upNumber(num) {
    return num + 1
}

function bai2() {
    let n = +prompt("Nhap vao so bat ky: ")
    let result = upNumber(n)
    alert("Ket qua ham tang so len 1: " + result)
}

///BAI 3
function noName(a,b) {
    if (a>b) {
        return "Phan tu thu 1 lon hon phan tu thu 2."
    } else {
        let c = a+b
        return "Tong cua 2 so la: " + c
    }
}

function bai3() {
    let i = +prompt("Nhap vao phan tu thu 1:")
    let j = +prompt("Nhap vao phan tu thu 2:")
    let result = noName(i,j)
    alert(result)
}

///BAI 4
function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    return result;
}

function bai4() {
    let result = 0;
    alert(result)
    result = addNumbers();
    alert(result)
}

///BAI 5
function findStar(star) {
    let arr1 = ["Polaris", "Aldebaran","Deneb", "Vega", "Altair", "Dubhe","Regulus"]
    let arr2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]
    let index = 0
    let result
    for (let i=0;i<arr1.length;i++) {
        if (star===arr1[i]) {
            index = i
            result = "Chom sao tuong ung la: " + arr2[i]
            break
        }
    }
    if (index===0) {
        result = "Khong co ngoi sao ban muon tim"
    }
    return result
}

function bai5() {
    let name = prompt("Nhap vao ten ngoi sao ban muon tim: ")
    let result = findStar(name)
    alert(result)
}