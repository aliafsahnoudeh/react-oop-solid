import BookingService from './BookingService';
import mocks from '../mockedData/companiesMock';
import bookResult from '../mockedData/bookResult';
import removeResult from '../mockedData/removeResult';

const bookingService = new BookingService(mocks);

describe('BookingService', () => {
  test('booking a new time slot should work correctly', () => {
    const result = bookingService.book({ company: 0, group: 0, timeSlot: 0 });
    expect(result).toStrictEqual(bookResult);
  });

  test('removing a selected time slot should work correctly', () => {
    const result = bookingService.remove({ company: 0, group: 0, timeSlot: 0 });
    expect(result).toStrictEqual(removeResult);
  });
});
