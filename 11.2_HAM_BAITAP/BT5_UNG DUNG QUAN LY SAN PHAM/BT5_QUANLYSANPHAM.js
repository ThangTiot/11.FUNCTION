// let numOfProduct = 0
let arr = []

function addProduct() {
    arr[arr.length] = document.getElementById("productName").value
    creatTable()
    document.getElementById("productName").value = ""
}

function creatTable() {
    let row = ""
    for (let j=0;j<arr.length;j++) {
        let data = "<tr><td width='60px' style='text-align: center'>"+ (j+1) + "</td><td width='180px'>" + arr[j] +
            "</td><td><button type=\"button\" class=\"btn btn-success\" onClick='editProduct(" + j + ")'>Edit</button></td>" +
            "<td><button type=\"button\" class=\"btn btn-success\" onClick='deleteProduct(" + j + ")'>Delete</button></td></tr>"
        row += data
    }
    document.getElementById("tableCreat").innerHTML = "<table><tr><th width='60px'>STT</th>" +
    "<th width='180px'>Product Name</th><th id='countProduct' colspan='2' width='150px' style='text-align: right'></th></tr>" + row + "</table>"
    document.getElementById("countProduct").innerHTML = arr.length + " Product"
}

function editProduct(i) {
    let newName = prompt("Nhap ten moi")
    arr[i] = newName
    creatTable()
}

function deleteProduct(i) {
    arr.splice(i,1)
    creatTable()
}

