const calculator = () => {
    var ch = document.getElementById("operator").value;
    var a = parseFloat(document.getElementById("valueofa").value);
    var b = parseFloat(document.getElementById("valueofb").value);
    var ans = 0;

    switch(ch) {
        case "+":
            ans = a + b;
            break;
        case "-":
            ans = a - b;
            break;
        case "/":
            ans = a / b;
            break;
        case "*":
            ans = a * b;
            break;
        default:
            console.log("enter valid input");
    }

    document.getElementById("solution").innerHTML = "Result: " + ans;
}
