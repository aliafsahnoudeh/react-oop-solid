// It just does the calculation and doesn't keep any state. We just pass the current state to it and it will use it for calculations and then just returns the result
import IBookingService from './IBookingService';

import CompanyModel from '../types/CompanyModel';
import IndicesModel from '../types/IndicesModel';
import TimeSlotUpdateModel from '../types/TimeSlotUpdateModel';
import BookingModel from '../types/BookingModel';
import TimeSlotModel from '../types/TimeSlotModel';

class BookingService implements IBookingService {
  companies: CompanyModel[];

  constructor(companies: CompanyModel[]) {
    this.companies = companies;
  }

  // eslint-disable-next-line class-methods-use-this
  hasOverlap(time1: TimeSlotModel | undefined, time2: TimeSlotModel | undefined): boolean {
    if (time1 === undefined || time2 === undefined) return false;

    if (time1.startTimestamp === time2.startTimestamp) return true;
    if (time1.startTimestamp > time2.startTimestamp) {
      if (time1.startTimestamp < time2.endTimestamp) return true;
      return false;
    }
    if (time1.endTimestamp > time2.startTimestamp && time1.endTimestamp <= time2.endTimestamp) return true;
    return false;
  }

  hasOverlapWithAnySelected(indices: IndicesModel, ignoreIndex: number):boolean {
    if (indices.group !== undefined && indices.timeSlot !== undefined) {
      const timeSlot: TimeSlotModel = this.companies[indices.company].groups[indices.group].timeSlots[indices.timeSlot];
      for (let i = 0; i < this.companies.length; i += 1) {
        if (i !== ignoreIndex) {
          if (this.companies[i].selectedTimeSlot !== undefined && (indices.company === i
            || this.hasOverlap(this.companies[i].selectedTimeSlot, timeSlot))) {
            return true;
          }
        }
      }
    }
    return false;
  }

  book(indices: IndicesModel): BookingModel {
    const updates: TimeSlotUpdateModel[] = [];
    updates.push({
      indices,
      disabled: false,
      selected: true,
    });

    if (indices.group === undefined || indices.timeSlot === undefined) {
      return {
        updates: [],
        selected: undefined,
      };
    }

    const groupDate = this.companies[indices.company].groups[indices.group].date.toISOString();
    for (let i = 0; i < this.companies.length; i += 1) {
      const { groups } = this.companies[i];
      for (let k = 0; k < groups.length; k += 1) {
        if (i === indices.company || groups[k].date.toISOString() === groupDate) {
          for (let j = 0; j < groups[k].timeSlots.length; j += 1) {
            if (!(i === indices.company && k === indices.group && j === indices.timeSlot)) {
              if (i === indices.company
            || this.hasOverlap(groups[k].timeSlots[j], this.companies[indices.company].groups[indices.group].timeSlots[indices.timeSlot])) {
                updates.push({
                  indices: {
                    company: i,
                    group: k,
                    timeSlot: j,
                  },
                  disabled: true,
                  selected: false,
                });
              }
            }
          }
        }
      }
    }

    const selected = JSON.parse(JSON.stringify(this.companies[indices.company].groups[indices.group].timeSlots[indices.timeSlot]));
    selected.label = this.companies[indices.company].groups[indices.group].dayLabel;

    return {
      updates,
      selected: {
        selected,
        companyIndex: indices.company,
      },
    };
  }

  remove(indices: IndicesModel): BookingModel {
    const updates: TimeSlotUpdateModel[] = [];
    updates.push({
      indices,
      disabled: false,
      selected: false,
    });
    if (indices.group === undefined || indices.timeSlot === undefined) {
      return {
        updates: [],
        selected: undefined,
      };
    }

    for (let i = 0; i < this.companies.length; i += 1) {
      const { groups } = this.companies[i];
      for (let k = 0; k < groups.length; k += 1) {
        for (let j = 0; j < groups[k].timeSlots.length; j += 1) {
          if (!this.hasOverlapWithAnySelected({ company: i, group: k, timeSlot: j }, indices.company)) {
            updates.push({
              indices: {
                company: i,
                group: k,
                timeSlot: j,
              },
              disabled: false,
              selected: false,
            });
          }
        }
      }
    }

    return {
      updates,
      selected: {
        selected: undefined,
        companyIndex: indices.company,
      },
    };
  }
}

export default BookingService;
