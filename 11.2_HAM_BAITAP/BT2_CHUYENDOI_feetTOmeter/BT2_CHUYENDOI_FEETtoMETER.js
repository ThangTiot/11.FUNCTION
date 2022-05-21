function feetToMeter(feet) {
    let meter = feet * 0.305
    return meter
}

function meterToFeet(meter) {
    let feet = meter * 0.305
    return feet
}

function feet() {
    let num = prompt("Nhap vao so muon doi sang met")
    let result = feetToMeter(num)
    alert(num + "feet thi bang: " + result + "m")
}

function meter() {
    let num = prompt("Nhap vao so muon doi sang feet")
    let result = meterToFeet(num)
    alert(num + "met thi bang: " + result + "feet")
}
