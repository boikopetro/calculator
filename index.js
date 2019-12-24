
function insert(num) {
    document.form.textview.value = document.form.textview.value+num;
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    let x = document.form.textview.value;
    document.form.textview.value = x.substring(0, x.length-1);
}

function equal() {
    let x = document.form.textview.value;
    if(x) {
        document.form.textview.value = eval(x);
    }
}
