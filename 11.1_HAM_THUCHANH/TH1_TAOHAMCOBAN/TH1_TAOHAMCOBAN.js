function processConfirm (answer) {
    let result
    if (answer) {
        result = "Let do it"
    } else {
        result = "See you again"
    }
    return result
}

function run() {
    let answerTheQuestion = confirm("Khoi nghiep khong?")
    let result = processConfirm(answerTheQuestion)
    alert(result)
}
