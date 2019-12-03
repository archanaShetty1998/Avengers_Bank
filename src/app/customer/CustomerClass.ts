export class CustomerClass{
	public account_no:number;
	public name:string;
	public dob:string;
	public phone_no:number;
	public username:string;
	public password:string;
	public amount:number;
	public branch_id:number;
	public loan_id:string;
	public acc_type_id:string;
	constructor(account_no:number,name:string,dob:string,phone_no:number,username:string,password:string,amount:number,branch_id:number,loan_id:string,acc_type_id:string){
		this.account_no=account_no;
		this.name=name;
		this.dob=dob;
		this.phone_no=phone_no;
		this.username=username;
		this.password=password;
		this.amount=amount;
		this.branch_id=branch_id;
		this.loan_id=loan_id;
		this.acc_type_id=acc_type_id;
		
	}


}