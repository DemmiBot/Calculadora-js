var charCount = 0;

function add(elem) {
    if(charCount==0) {
        document.getElementById('result_text').innerText = '';
    }
    if(charCount < 10) {
        var innerText = document.getElementById('result_text').innerText;
        var newChar =  document.getElementById(elem.id).innerText;
        innerText = innerText.slice(0, charCount) + newChar + innerText.slice(charCount+1);
        document.getElementById('result_text').innerText = innerText;
        charCount++;
        console.log(charCount);
    }
    changeBg(elem);
}

function remove(elem) {
    if(charCount > 0) {
        charCount--;
        var innerText = document.getElementById('result_text').innerText;
        innerText = innerText.slice(0, innerText.length-1)
        document.getElementById('result_text').innerText = innerText;
        console.log(charCount);
    }
    changeBg(elem);
}
function submit(elem) {
    var expression = document.getElementById('result_text').innerText;
    var numericalExpression = 0;
    var result = 0;
    changeBg(elem);
    for(let i=0; i<expression.length; i++) {
        if(expression[i] == '*') {
            var left = parseInt(expression.slice(0, i));
            var right = 0;
            right = parseInt(expression.slice(i+1));
            result = left * right;
            document.getElementById('result_text').innerText = result.toString();
            charCount = 0;
        }

        if(expression[i] == '/') {
            var left = parseInt(expression.slice(0, i));
            var right = 0;
            right = parseInt(expression.slice(i+1));
            result = left / right;
            document.getElementById('result_text').innerText = result.toString();
            charCount = 0;
        }

        if(expression[i] == '+') {
            var left = parseInt(expression.slice(0, i));
            var right = 0;
            right = parseInt(expression.slice(i+1));
            result = left + right;
            document.getElementById('result_text').innerText = result.toString();
            charCount = 0;
        }

        if(expression[i] == '-') {
            var left = parseInt(expression.slice(0, i));
            var right = 0;
            right = parseInt(expression.slice(i+1));
            result = left - right;
            document.getElementById('result_text').innerText = result.toString();
            charCount = 0;
        }
    }
}

function changeBg(elem) {
    var id = elem.id;
    document.getElementById(id).style.backgroundColor = "blue";
    document.getElementById(id).style.color = "white";
    setTimeout(() => {
        document.getElementById(id).style.backgroundColor = "azure";
        document.getElementById(id).style.color = "black";
    }, 100);
}