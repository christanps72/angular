import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'session-one';

  mainNumber = 12;

  changeNumber(): void {
    this.mainNumber = 120;
  }
}
