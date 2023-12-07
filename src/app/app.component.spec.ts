import { DeferBlockState, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    button.click();
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();

    const [animalRatingsFixture] = await fixture.getDeferBlocks();
    await animalRatingsFixture.render(DeferBlockState.Complete);

    expect(fixture).toMatchSnapshot();
  });
});
