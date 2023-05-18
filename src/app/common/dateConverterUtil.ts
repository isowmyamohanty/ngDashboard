import moment from 'moment';
import {isString, isDate} from'is-what';

export class DateConverterUtil{
    
    stringDateFormat(date: any){
        if(!isDate(date)){
            return date;
        }else {
            let d: any = moment(date, 'DD-MMM-YYY', true).local().utc();
            return new Date(d);
        }
    }

    formatDateToString(date: any){
        if(date){
            if(isString(date)){
                date = this.stringDateFormat(date);
            }
            if(isDate(date)){
                let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                return (('o' + date.getDate()).slice(-2) + '-' + month[date.getMonth()] + '-' + date.getFullYear());
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    formatDateToStringYYYYMMDD(localDate: any){
        if(localDate){
            if(isString(localDate)){
                localDate = this.stringDateFormat(localDate);
            }
            return (localDate.getFullYear() + '' + ('0' + localDate.getMonth()).slice(-2) + '' + ('0' + localDate.getDate()).slice(-2));
        }else{
            return null;
        }
    }

    stringToDateFormatFromYYYYMMDD(date: any){
        if(isDate(date)){
            return date;
        }else{
            let d: any = moment(date, 'YYYY-MM-DD', true).local().utc();
            return new Date(d);
        }
    }

    formatDateToStringFromYYYYMMDD(date: any){
        if(date){
            if(isString(date)){
                date = this.stringToDateFormatFromYYYYMMDD(date);
            }
            if(isDate(date)){
                let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                return (('0' + date.getFullYear()).slice(-2) + '-' + month[date.getMonth()] + '-' + date.getFullYear());
            }else{
                return null;
            }
        }else{
            return null;
        }
    }
    formatDateToUTC(date: any){
        let localDate = new Date(date);
        //return(localDate.getUTCFullYear + '-' + ('0' + localDate.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + localDate.Date()))
    }
}