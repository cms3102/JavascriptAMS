/**
 * 
 */

function MinusAccount(accountNum, accountOwner, passwd, restMoney, borrowMoney) {
	Account.call(this, accountNum, accountOwner, passwd, restMoney);
	
		this.borrowMoney = borrowMoney;
	
}

MinusAccount.prototype.getRestMoney = function() {
	return this.restMoney - this.borrowMoney;
}

MinusAccount.prototype.toString = function() {
	return "마이너스" + "  " + this.accountNum + "  " + this.accountOwner + "  " + "****" + "  " + this.restMoney + "  " + this.borrowMoney;
}

