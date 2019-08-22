import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService{
    log(toLog: string){
        console.log(toLog);
    }
}