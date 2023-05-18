import * as moment from 'moment';

export class DateTimeService {
    public getExportExcelFileNameWithCurrentDateTime(): string{
        let date = new Date();
        return this.getYear(date)+ this.getMonth(date) + this.getDate(date) + '_' + this.getHours(date) + this.getMinutes(date) + this.getSeconds(date);
    }
    public getComboDateFormat(){
        let date = new Date();
        return this.getYear(date)+ '-' + this.getMonth(date) + '-' + this.getDate(date);
    }
    public CheckBusinessDateIsWeekend(date:string){
        let d = moment(date);
        if(d.day() === 6 || d.day() === 0)
            return true;
        else
            return false;
    }
        
    private getYear(date: Date): number{
        return date.getFullYear();
    }
    private getMonth(date: Date): string {
        return ('0'+ (date.getMonth()+ 1)).slice(-2);
    }
    private getDate(date:Date):string{
        return ('0'+ (date.getDate())).slice(-2);
    }
    private getHours(date:Date): string{
        return ('0'+ (date.getHours())).slice(-2);
    }
    private getMinutes(date:Date): string {
        return ('0'+ (date.getMinutes())).slice(-2);
    }
    private getSeconds(date:Date):string{
        return ('0'+ date.getSeconds()).slice(-2);
    }
}