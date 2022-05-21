function creatArr() {
    let data = prompt("Nhap vao cac phan tu cua mang:(Phan biet nhau bang dau cach)")
    let arr = data.split(" ")
    return arr
}

function findMin(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]/1 < min) {
            min = arr[i]
            console.log(typeof min)
        }
    }
    return min
}

function run() {
    let arr1 = creatArr()
    console.log(arr1)
    let result = findMin(arr1)
    alert("Gia tri nho nhat trong mang la: " + result)
}