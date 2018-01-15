/**
 * 
 */

function AccountManager() {
	
	array = [];
	
}




// 계좌 개설
AccountManager.prototype.open = function (account) {
				array.push(account);
}

// 전체 계좌 조회
AccountManager.prototype.listAll = function () {
	return array;
}

// 계좌번호로 계좌 조회
AccountManager.prototype.get = function (accountNum) {
	
	for (var i = 0; i < array.length; i++) {
		if (array[i].accountNum == accountNum) {
			return array[i];
		}
	}
	
	return false;
}

// 예금주명으로 계좌 조회
AccountManager.prototype.search = function (accountOwner) {
	
	var result = [];
	
	for (var i = 0; i < array.length; i++) {
		if (array[i].accountOwner == accountOwner) {
			result.push(array[i]);
		}
	}
	
	if (result.length == 0) {
		return false;
	} else {
		return result;
	}
	
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