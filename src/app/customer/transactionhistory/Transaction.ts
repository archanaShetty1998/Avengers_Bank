export class Transaction{
	id:number;
	trans_date:string;
	credit: number;
	debit:number;
	account_no:number;
	constructor(id:number,trans_date:string,credit: number,debit:number,account_no:number){
		this.id=id;
		this.trans_date=trans_date;
		this.credit=credit;
		this.debit=debit;
		this.account_no=account_no;
		
	}
}

