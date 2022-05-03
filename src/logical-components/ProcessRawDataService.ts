import CompanyModel from '../types/CompanyModel';
import GroupModel from '../types/GroupModel';
import RawCompanyModel from '../types/RawCompanyModel';
import TimeSlotModel from '../types/TimeSlotModel';
import RawTimeSlotModel from '../types/RawTimeSlotModel';
import IProcessRawDataService from './IProcessRawDataService';

class ProcessRawDataService implements IProcessRawDataService {
  private readonly months: string[];

  private readonly days: string[];

  constructor() {
    // TODO in translation files in case of multilingual
    this.months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  public process(rawCompanies: RawCompanyModel[]): CompanyModel[] {
    return rawCompanies.map((rawCompany: RawCompanyModel):CompanyModel => {
      const newCompany = {
        id: rawCompany.id,
        name: rawCompany.name,
        type: rawCompany.type,
        selectedTimeSlot: undefined,
        groups: [] as GroupModel[],
      } as CompanyModel;

      // TODO merge these two iterations. converting and adding to a group can be in the same place
      const newTimeSlots = this.convertTimeSlot(rawCompany.time_slots);
      if (newTimeSlots.length > 0) {
        let index = -1;
        for (let i = 0; i < newTimeSlots.length; i += 1) {
          const startOfTheDay = new Date(newTimeSlots[i].year, newTimeSlots[i].month, newTimeSlots[i].day);
          if (index === -1 || newCompany.groups[index].date.toISOString() !== startOfTheDay.toISOString()) {
            const newGroup = {
              dayLabel: `${this.months[startOfTheDay.getMonth()]} ${startOfTheDay.getDate()} ${this.days[startOfTheDay.getDay()]}`,
              date: startOfTheDay,
              timeSlots: [newTimeSlots[i]],
            } as GroupModel;
            newCompany.groups.push(newGroup);
            index += 1;
          } else {
            newCompany.groups[index].timeSlots.push(newTimeSlots[i]);
          }
        }
      }
      return newCompany;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private convertTimeSlot(timeSlots: RawTimeSlotModel[]): TimeSlotModel[] {
    const newList = timeSlots.map((timeSlot: RawTimeSlotModel):TimeSlotModel => {
      const startDate = new Date(timeSlot.start_time);
      const endDate = new Date(timeSlot.end_time);

      return {
        start: startDate.toISOString().slice(11, 16),
        end: endDate.toISOString().slice(11, 16),
        disabled: false,
        selected: false,
        startTimestamp: startDate.getTime(),
        endTimestamp: endDate.getTime(),
        label: undefined,
        year: startDate.getFullYear(),
        month: startDate.getMonth(),
        day: startDate.getDay(),
        date: new Date(startDate),
      } as TimeSlotModel;
    });

    // TODO remove if it's already sorted
    newList.sort((a, b) => {
      if (a.startTimestamp >= b.startTimestamp) return 1;
      return -1;
    });

    return newList;
  }
}

export default ProcessRawDataService;
