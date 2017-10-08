import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {LocalizeService} from "app/core/services/localize.service";
import {ContextService} from 'app/core/services/context.service';

@Component({
    templateUrl: 'app/features/home/welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    pageTitle: string = "Welcome Page";    
    isresourceLoaded: boolean = this._contextService.getValue('LocalizationResourceLoaded')?true:false;
    //@Input() set resourceLoaded(val:boolean) {
    //    this.isresourceLoaded = false;
    //    this.resourceLoadedChange.emit(this.isresourceLoaded);
    //}

    //@Output() resourceLoadedChange = new EventEmitter();

    constructor(private _localizeService: LocalizeService, private _contextService: ContextService) {

    }

    ngOnInit(): void {
        this._localizeService.resourceLoaded().subscribe(e =>
        {
            this.isresourceLoaded = true;
            this._contextService.setValue('LocalizationResourceLoaded', this.isresourceLoaded);
            //this.resourceLoadedChange.emit(this.isresourceLoaded);

        });
    }   

}