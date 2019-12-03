export class Loan{
	id:string;
	loan_type:string;
	description: string;
	eligibility: string;
	interest_rate: number;
	constructor(id:string,loan_type:string,description: string,eligibility: string,interest_rate: number){
		this.id=id;
		this.loan_type=loan_type;
		this.description=description;
		this.eligibility=eligibility;
		this.interest_rate=interest_rate;
	}
}