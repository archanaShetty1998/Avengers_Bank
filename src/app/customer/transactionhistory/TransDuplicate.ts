export class TransDuplicate{
	id:number;
	trans_date:string;
	credit: number;
	debit:number;
	amount:number;

	constructor(id:number,trans_date:string,credit: number,debit:number,amount:number){
		this.id=id;
		this.trans_date=trans_date;
		this.credit=credit;
		this.debit=debit;
		this.amount=amount;
		
	}
}

