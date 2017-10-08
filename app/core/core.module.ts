import {NgModule} from '@angular/core';
import {HttpUtilityService} from 'app/core/services/http-utility.service';
import {LoggerService} from 'app/core/services/logger.service';
import {ContextService} from 'app/core/services/context.service';
import {LocalizeService} from 'app/core/services/localize.service';
import {HelperService} from 'app/core/services/helper.service';



//Core module for application wide singletons.

@NgModule({    
     providers: [HttpUtilityService, LoggerService, ContextService, LocalizeService, HelperService]   

})
export class CoreModule {

}