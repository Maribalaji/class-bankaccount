let a=parseInt(prompt("please enter deposit amount"));
let b=parseInt(prompt("please enter withdraw amount"));

class BankAccount{
    constructor(accountNo,balance){
        this.accountNo=accountNo;
        this.balance=balance;

    }
    
    deposit(a){
        this.balance+=a;
    
         document.write(`Account No is ${this.accountNo} ,deposit amount is ${a} balanced amount ${this.balance} <br>`);
        
         

    }
    withdraw(b){
        this.balance-=b
        document.write(` Account No is ${this.accountNo} , withdraw amount ${b} balanced amount ${this.balance} <br>`);

    }

}
let user=new BankAccount(120234,1000)
user.deposit(a);
user.withdraw(b);