import React from 'react';

import useStore from '../store';
import LogicContext from '.';

import IBookingService from './IBookingService';
import BookingModel from '../types/BookingModel';
import IndicesModel from '../types/IndicesModel';

function useBooking() {
  const { companies, updateTimeSlots, updateSelected } = useStore();
  const { BookingService } = React.useContext(LogicContext);
  // TODO put it inside handler
  const bookingService: IBookingService = new BookingService(companies);

  const handleTimeSlotClick = (indices: IndicesModel | undefined): void => {
    // TODO some error handling
    if (indices === undefined) return;
    let result:BookingModel = {
      updates: [],
      selected: undefined,
    };
    if (indices.group !== undefined && indices.timeSlot !== undefined) {
      const current = companies[indices.company].groups[indices.group].timeSlots[indices.timeSlot];
      if (current.selected) result = bookingService.remove(indices);
      else if (!current.disabled) result = bookingService.book(indices);
    }

    updateTimeSlots(result.updates);
    if (result.selected !== undefined) { updateSelected(result.selected); }
  };

  return [handleTimeSlotClick];
}

export default useBooking;
