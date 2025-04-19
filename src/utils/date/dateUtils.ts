import {DateModel} from "./DateModel.ts";

export function  parseDateModel(date:string){
    const newDate = new Date(date);

    const model: DateModel = {
        month:newDate.getMonth()+1, day:newDate.getDate(), year:newDate.getFullYear()
    }
    return model;

}


export  function getMonthName(date:number) : string{

    switch (date) {
        case 1:
            return "Ocak";
            break;
        case 2:
            return "Şubat";
            break;
        case 3:
            return "Mart";
            break;
        case 4:
            return "Nisan";
            break;
        case 5:
            return "Mayıs";
            break;
        case 6:
            return "Haziran";
            break;
        case 7:
            return "Temmuz"
        break;

        case 8:
            return "Ağustos"
        break;
            case 9:
                return "Eylül";
                break;
                case 10:
                    return "Ekim";
                    break;
                    case 11:
                        return "Kasım"
        break;
                        case 12:
                            return "Aralık";
                            break;


        default:
            return "";
            break;


    }


}