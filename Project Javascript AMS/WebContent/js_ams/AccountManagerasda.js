/**
 * 
 */

function AccountManager() {
	
	array = [];
	
}

// 계좌 유형 판별
function typeCheck(select) {
	var selectedValue = select.options[select.selectedIndex].value;
	if (selectedValue == "normal") {
		return 1;
	} else if (selectedValue == "minus") {
		return 2;
	} else {
		return 3;
		alert("계좌 유형을 선택해 주세요.");
	}
	 
}


// 계좌 개설
AccountManager.prototype.open = function (account, select) {
	
		if (typeCheck(select) == 1 || typeCheck(select) == 2) {
			if (formatCheck(account)) {
				array.push(account);
				alert("계좌 생성 성공");
			} else {
				alert("계좌 생성 실패");
			}
		} else {
			alert("계좌 유형을 선택해 주세요.");
		}

}

// 전체 계좌 조회
AccountManager.prototype.listAll = function () {
	var entireList = "";
	for (var i = 0; i < array.length; i++) {
		entireList += "<tr>";
		if (array[i] instanceof Account) {
			entireList += "<td>입출금</td>";
		} else {
			entireList += "<td>마이너스</td>";
		}
		entireList += "<td>" + array[i].accountNum + "</td>";
		entireList += "<td>" + array[i].accountOwner + "</td>";
		entireList += "<td>" + array[i].restMoney + "</td>";
		if (array[i] instanceof MinusAccount) {
			entireList += "<td>" + array[i].borrowMoney + "</td>";
		} else {
			entireList += "<td>0</td>";
		}		
		entireList += "</tr>";
		
	}
	
	document.getElementById("result").innerHTML = entireList;
	
}

// 계좌번호로 계좌 조회
AccountManager.prototype.get = function () {
	
	var accountNum = document.getElementsByName("accountno")[0].value;
	
	var entireList = "";
	
	var count = 0;
	
	for (var i = 0; i < array.length; i++) {
		if (array[i].accountNum === accountNum) {
			entireList += "<tr>";
			if (array[i] instanceof Account) {
				entireList += "<td>입출금</td>";
			} else {
				entireList += "<td>마이너스</td>";
			}
			entireList += "<td>" + array[i].accountNum + "</td>";
			entireList += "<td>" + array[i].accountOwner + "</td>";
			entireList += "<td>" + array[i].restMoney + "</td>";
			if (array[i] instanceof MinusAccount) {
				entireList += "<td>" + array[i].borrowMoney + "</td>";
			} else {
				entireList += "<td>0</td>";
			}		
			entireList += "</tr>";
			count++;
		}
	}
	
	if (count == 0) {
		alert("입력된 계좌번호와 일치하는 계좌가 없습니다.");
	}
	
	document.getElementById("result").innerHTML = entireList;
	
}

// 예금주명으로 계좌 조회
AccountManager.prototype.search = function () {
	
	var accountOwner = document.getElementsByName("accowner")[0].value;
	
	var entireList = "";
	
	var count = 0;
	
	for (var i = 0; i < array.length; i++) {
		if (array[i].accountOwner === accountOwner) {
			entireList += "<tr>";
			if (array[i] instanceof Account) {
				entireList += "<td>입출금</td>";
			} else {
				entireList += "<td>마이너스</td>";
			}
			entireList += "<td>" + array[i].accountNum + "</td>";
			entireList += "<td>" + array[i].accountOwner + "</td>";
			entireList += "<td>" + array[i].restMoney + "</td>";
			if (array[i] instanceof MinusAccount) {
				entireList += "<td>" + array[i].borrowMoney + "</td>";
			} else {
				entireList += "<td>0</td>";
			}			
			entireList += "</tr>";
			count++;
		}
	}
	
	if (count == 0) {
		alert("입력된 예금주명과 일치하는 계좌가 없습니다.");
	}
	
	document.getElementById("result").innerHTML = entireList;
	
}

// 계좌번호로 계좌 삭제
AccountManager.prototype.remove = function () {

	var accountNum = document.getElementsByName("accountno")[0].value;
	
	var count = 0;
	
	for (var i = 0; i < array.length; i++) {
		if (array[i].accountNum === accountNum) {
			array.splice(i, 1);
			alert("계좌가 성공적으로 삭제 되었습니다.");
			count++;
		}
	}
	
	if (count == 0) {
		alert("계좌 삭제에 실패하였습니다.");
	} else {
		listAll();
	}
	
}