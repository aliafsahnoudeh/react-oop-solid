import create from 'zustand';
import produce from 'immer';

import CompanyModel from '../types/CompanyModel';
import TimeSlotUpdateModel from '../types/TimeSlotUpdateModel';
import SelectedTimeSlotModel from '../types/SelectedTimeSlotModel';

interface AppState {
  companies: CompanyModel[];
  setCompanies: (companies: CompanyModel[]) => void;
  updateTimeSlots: (payload: TimeSlotUpdateModel[]) => void;
  updateSelected: (selected: SelectedTimeSlotModel) => void;
}

const useStore = create<AppState>((set) => ({
  companies: [],
  setCompanies: (companies: CompanyModel[]) => {
    set(() => ({
      companies,
    }));
  },
  updateTimeSlots: (updates: TimeSlotUpdateModel[]) => {
    set(
      produce((draft) => {
        for (let i = 0; i < updates.length; i += 1) {
          const { indices, disabled, selected } = updates[i];
          if (indices.group !== undefined && indices.timeSlot !== undefined) {
            const item = draft.companies[indices.company].groups[indices.group].timeSlots[indices.timeSlot];
            item.disabled = disabled;
            item.selected = selected;
          }
        }
      }),
    );
  },
  updateSelected: (selected: SelectedTimeSlotModel) => {
    set(
      produce((draft) => {
        const company = draft.companies[selected.companyIndex];
        company.selectedTimeSlot = selected.selected;
      }),
    );
  },
}));

export default useStore;
