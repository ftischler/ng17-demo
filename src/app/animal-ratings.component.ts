import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'ng17-demo-animal-ratings',
  standalone: true,
  imports: [KeyValuePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      @for (animalRating of animalRatings | keyvalue; track animalRating.key) {
      <li>{{ animalRating.key }}: {{ animalRating.value }}</li>
      }
    </ul>
  `,
})
export class AnimalRatingsComponent {
  readonly animalRatings = {
    bear: 10,
    dog: 10,
    cat: 10,
  };
}
