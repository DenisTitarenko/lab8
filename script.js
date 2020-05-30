function checkData() {
    var ans;
    if (analize()) {
        ans = confirm("Вы уверены, что хотите отправить введенные данные?");
        if (ans) submit();
    }
}

function analize() {

    var usernamelength = document.getElementById("username").value.length;
    var emaillength = document.getElementById("email").value.length;
    var phonelength = document.getElementById("phone").value.length;
    var validMail, pattrn, anphone, anphoneValid;

    pattrn = new RegExp("^[\.\-_A-Za-z0-9]+?@[\.\-A-Za-z0-9]+?\.[A-Za-z0-9]{2,6}$");
    anphone = new RegExp("^[0-9]{1,11}$");

    validMail = pattrn.test(document.getElementById("email").value);
    anphoneValid = anphone.test(document.getElementById("phone").value);

    console.log(usernamelength + " " + emaillength + " " + validMail);

    if ((usernamelength === 0) || (emaillength === 0)) {
        document.getElementById("warning").innerHTML = "<br>Обязательные поля не заполнены!";
        return false;
    }

    if (!validMail) {
        document.getElementById("warning").innerHTML = "<br>Поля заполнены неправильно!";
        return false;
    }

    if (phonelength !== 0) {
        if (!anphoneValid) {
            document.getElementById("warning").innerHTML = "<br>Поля заполнены неправильно!";
            return false;
        }
    }

    return true;
}
