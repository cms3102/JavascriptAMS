/**
 * 
 */
// 유효성 검사

var num = /^\d{4}[\-]\d{4}$/; 
var owner = /^[a-zA-Z가-힣]{1,10}$/; 
var pw = /^\d{4}$/; 
var rs = /^\d+$/; 
var bm = /^\d+$/; 

function formatCheck(account) {
	
	if (!num.test(account.accountNum)) {
		alert("계좌번호를 1111-1111 형식으로 입력해 주세요.");
		return false;
	}
	
	if (!owner.test(account.accountOwner)) {
		alert("예금주명을 영문/한글 10자 내로 입력해 주세요.");
		return false;
	}
	
	if (!pw.test(account.passwd)) {
		alert("비밀번호를 숫자 4개 형식으로 입력해 주세요.");
		return false;
	}
	
	if (!rs.test(account.restMoney)) {
		alert("입금액을 숫자 형식으로 입력해 주세요.");
		return false;
	}
	
	if (typeCheck(select) == 2) {
		if (!bm.test(account.borrowMoney)) {
			alert("대출금액을 숫자 형식으로 입력해 주세요.");
			return false;
		}
	}
	
	return true;
	
}