import {Component} from '@angular/core';
import { loginVars } from '../login/loginVars';

@Component(
{
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']

})
export class menu
{

    isAdmin = false;

    constructor() {}

    ngOnInit(): void {
        this.isAdmin = loginVars.getIsAdmin();
    }
    
}