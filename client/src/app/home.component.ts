import { Component } from '@angular/core';
 
@Component({
  selector: 'home',
  template: `
  <h1>Welcome to {{title}}!</h1>
  `,

})
export class HomeComponent {
  title = 'Recipe Book';
}