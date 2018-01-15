/**
 * 
 */

function Account(accountNum, accountOwner, passwd, restMoney) {
	this.accountNum = accountNum;
	this.accountOwner = accountOwner;
	this.passwd = passwd;
	this.restMoney = restMoney;
};

Account.bankName = "KOSTA은행";

Account.prototype.deposit = function(money) {
	this.restMoney += money;
	return this.restMoney;
}

Account.prototype.withdraw = function(money) {
	this.restMoney -= money;
	return this.restMoney;
}

Account.prototype.checkPasswd = function(pw) {
	return this.passwd == pw;
}

Account.prototype.equals = function(obj) {
	if (obj instanceof Account) {
		return true;
	}
	return false;
}

Account.prototype.toString = function() {
	return "입출금" + "  " + this.accountNum + "  " + this.accountOwner + "  " + "****" + "  " + this.restMoney;
}
