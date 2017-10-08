import {Injectable} from '@angular/core';
import {Dictionary} from 'app/shared/utility/dictionary';
import {settings, languages} from 'app/shared/constant';

//let _contextItems: Dictionary<string, string> = new Dictionary<string, string>();

@Injectable()
export class ContextService {

_contextItems: Dictionary<string, string> = new Dictionary<string, string>();
    
getValue(key: string): string {
    //alert(settings.BASE_API_URL);
        let value:string = this._contextItems.getValue(key);
        return value;
    }

setValue(key: string, value: string): void {
    //alert(settings.BASE_API_URL);
        this._contextItems.add(key, value);
    }

}