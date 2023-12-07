import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimalRatingsComponent } from './animal-ratings.component';

@Component({
  standalone: true,
  imports: [AnimalRatingsComponent, RouterModule],
  selector: 'ng17-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  loggedIn = signal<boolean>(false);
  longText = 'This is not a long text';

  login() {
    this.loggedIn.set(true);
  }

  logout() {
    this.loggedIn.set(false);
  }
}
