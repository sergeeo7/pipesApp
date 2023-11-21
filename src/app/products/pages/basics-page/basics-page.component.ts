import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'sergio';
  public nameUpper: string = 'SERGIO';
  public fullName: string = 'sErGiO oRtIz';

  public customDate: Date = new Date();
}
