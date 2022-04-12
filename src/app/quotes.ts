export class Quotes {
 
 
  showauthor: boolean;
  name: any;
  constructor(public id: number,public author: string,public createdby: string, public message:string,public createdDate: Date){
    this.showauthor=false;

} 

}
