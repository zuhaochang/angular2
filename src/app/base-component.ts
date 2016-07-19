import { Component, OnInit, OnChanges, SimpleChange,DoCheck,OnDestroy} from '@angular/core';

export class BaseComponent implements OnInit, OnChanges, DoCheck,OnDestroy {
    private name: string;
    private init_times: number = 0;
    private changes_times: number = 0;
    private check_times: number = 0;
    private destroy_times: number = 0;

    constructor() {
        this.name = this.constructor.toString().match(/\w+/g)[1];//取出該元件名稱供hooks讀取
    }

    ngOnInit() {
        console.log(`OnInit Times ${++this.init_times}: ${this.name}`);
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) { //變更即紀錄
        console.warn(`OnChanges Times ${++this.changes_times}: ${this.name}`);
    }

    ngDoCheck() {
        console.info(`DoCheck Times ${++this.check_times}: ${this.name}`);
    }

    ngOnDestroy() {
        console.error(`OnDestroy Times ${++this.destroy_times}: ${this.name}`);
    }
}
