import {
  Component,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Slides } from './components/slides/slides';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Slides],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-presentation');
}
