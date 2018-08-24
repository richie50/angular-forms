import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FormDataMock implements InMemoryDbService{
        createDb(){
            let forms = [ // 
                { id: 1, name: 'Windstorm' },
                { id: 2, name: 'Bombasto' },
                { id: 3, name: 'Magneta' },
                { id: 4, name: 'Tornado' }
            ];
            let users = [
                {id: 1 ,user: 'Richmond'},
                {id: 2, user: 'Frimpong'},
            ];
            return {forms:forms , users:users};
        }
        
}