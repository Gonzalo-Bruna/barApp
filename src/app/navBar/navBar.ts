import {Component} from '@angular/core';

@Component(
{
    selector: 'navBar',
    templateUrl: './navBar.html',
    styleUrls: ['./navBar.scss']
})

export class navBar
{
    isLoggedIn = false;
    username?: string;    
    logout(): void {}
}