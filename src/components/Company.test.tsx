import React from 'react';
import {
  render, waitFor,
} from '@testing-library/react';
import companiesMock from '../mockedData/companiesMock';

import Company from './Company';

describe('Company', () => {
  test('rendering a company should work correctly', async () => {
    const { container } = render(<Company company={companiesMock[0]} index={0} />);
    await waitFor(async () => {
      expect(container.getElementsByClassName('company').length).toBe(1);
    });
  });

  test('rendering time slots should work correctly', async () => {
    const { container } = render(<Company company={companiesMock[0]} index={0} />);
    await waitFor(async () => {
      let totalTimeSlots = 1; // selected slot on the top of company component!
      companiesMock[0].groups.forEach((group) => {
        totalTimeSlots += group.timeSlots.length;
      });
      expect(container.getElementsByClassName('time-slot').length).toBe(totalTimeSlots);
    });
  });
});
