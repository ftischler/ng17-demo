import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng17-demo-animal-ratings',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      @for (animalRating of animalRatings; track animalRating.key) {
      <li>
        <div>{{ animalRating.key }}</div>
        <div>{{ animalRating.value }}</div>
      </li>
      }
    </ul>
  `,
  styleUrl: './animal-ratings.component.scss',
})
export class AnimalRatingsComponent {
  readonly animalRatings = [
    { key: '🐻 Bear', value: 10 },
    { key: '🐶 Dog', value: 10 },
    { key: '🐱 Cat', value: 10 },
    { key: '🕷 Spider', value: 2 },
  ];
}
