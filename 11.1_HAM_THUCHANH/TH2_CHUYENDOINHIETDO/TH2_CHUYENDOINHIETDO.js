function convertFtoC (f) {
    let c = (f-32)/1.8
    return c
}

function convert() {
    let value = document.getElementById("inputValue").value
    let result = convertFtoC(value)
    document.getElementById("result").innerHTML = "Celcius: " + result
}