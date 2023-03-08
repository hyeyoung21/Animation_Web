var member_id = new Array("admin", "user", "super");
var member_pwd = new Array("1234", "1111", "4321");
var member_name = new Array("권혜영", "홍길동", "김치국");
var member_no = new Array("8801011111111", "9005052222222", "9204011111112");

function loginCheck() {
    var id = document.frm.id.value;
    var pw = document.frm.PW.value;
    var check = 0;

    for (var i = 0; i < member_id.length; i++) {
        if ((id == member_id[i]) && (pw == member_pwd[i]))
            check = 1;

        if (check == 1) {
            alert(member_name[i] + " 님이 로그인하였습니다.");
            return true;
        }

    }
    if (check == 0) {
        alert("정확한 아이디와 비밀번호를 입력하세요.");
        return false;
        document.frm.id.value = "";
        document.frm.PW.value = "";
    }
}



function findName(strName) {
    for (var i = 0; i < member_id.length; i++)
        if (strName == member_id[i])
            return member_name[i];
}

function logoutProcess() {
    parent.location.replace("index.html");
}


function idCheck() {

    var check = 0;
    for (var i = 0; i < member_id.length; i++) {
        if (joinForm.id.value == member_id[i])
            check = 1;
        break;
    }

    if (check == 1) {
        alert('입력하신 아이디는 사용중입니다. 다시 입력하세요');
        joinForm.id.value = "";
    } else
        alert('입력하신 아이디는 사용가능합니다.');
}


function joinCheck() {
    while (joinForm.member_id.value == "" || joinForm.member_pw.value == "" || joinForm.member_pw_check.value == "" || joinForm.member_name.value == "") {
        alert("필수요소는 반드시 입력하세요");
        if (joinForm.member_pw.value != joinForm.member_pw_check.value) {
            alert("동일한 비밀번호를 제대로 두 번 입력해야 합니다.");
            return false;
            joinForm.member_pw.value = "";
            joinForm.member_pw_check.value = "";
        }
        joinForm.member_id.value = "";
        joinForm.member_pw.value = "";
        joinForm.member_pw_check.value = "";
        joinForm.member_name.value = "";
    }
    return true;
}

function menu_choice(num) {
    switch (num) {
        case 1:
            parent.document.location.replace(".html");
            break;
        case 2:
            parent.right.document.location.replace(".html");
            break;
        case 3:
            parent.right.document.location.replace(".html");
            break;
        case 4:
            parent.right.document.location.replace(".html");
            break;
    }
}


function noCheck() {
    var idNo = joinForm.idLeft.value + joinForm.idRight.value;
    var i;

    for (var i = 0; i < 3; i++) {

        if (member_no[i] == idNo) {
            alert('입력하신 주민등록번호는 사용중입니다. 다시 입력하세요.');
            joinForm.idLeft.value = "";
            joinForm.idRight.value = "";
            break;
        } else {
            var check = confirm('입력하신 주민등록번호는 사용 가능합니다. 사용하시겠습니까?');
            if (check) {
                if (idNo.charAt(6) == "1" || idNo.charAt(6) == "3")
                    joinForm.sex.value = "male";
                else if (idNo.charAt(6) == "2" || idNo.charAt(6) == "4")
                    joinForm.sex.value = "female";

                joinForm.year.value = idNo.substr(0, 2);
                joinForm.month.value = idNo.substr(4, 2);
                joinForm.date.value = idNo.substr(6, 2);
            } else {
                joinForm.idLeft.value = "";
                joinForm.idRight.value = "";
            }
            break;
        }
    }
}
