import BookingModel from '../types/BookingModel';
import IndicesModel from '../types/IndicesModel';

interface IBookingService {
  book(indices: IndicesModel): BookingModel;
  remove(indices: IndicesModel): BookingModel;
}

export default IBookingService;
