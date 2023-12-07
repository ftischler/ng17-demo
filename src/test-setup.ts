// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};
import { mockIntersectionObserver } from 'jsdom-testing-mocks';

import 'jest-preset-angular/setup-jest';

mockIntersectionObserver();
