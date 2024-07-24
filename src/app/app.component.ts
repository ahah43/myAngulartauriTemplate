import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TauriService } from './services/tauri.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngulartauriTemplate';
  constructor(
    private tauriService: TauriService,
  ) {
    if (this.tauriService.isTauri) {
      console.log('Run in Tauri');
      // this.tauriService.callHelloWorld();
    } else {
      console.log('Run in browser');
    }
  }
}
