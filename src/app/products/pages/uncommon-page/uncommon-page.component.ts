import { Component } from '@angular/core';
import {interval, tap} from "rxjs";

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Sergio';
  public gender: string = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural & slice
  public clients: string[] = ['María', 'Pedro', 'Fernando', 'Sergio', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //Json & KeyValue
  public person = {
    name: 'Sergio',
    age: 23,
    address: 'Madrid'
  }

  //Async
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap', value))
  );

  public promiseValue = new Promise(resolve => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  })

}
