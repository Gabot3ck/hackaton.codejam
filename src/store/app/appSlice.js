import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
      isSaving: true,
      areas: [],
      records:[],
    },
    reducers: {
      getAreas: ( state, { payload } ) => {
        state.areas = payload
      },
      getRecords: ( state, { payload } ) => {
        state.records = payload;
      },
      savingNewRecord: ( state ) => {
        state.isSaving = false;
      },
      recorded: ( state ) => {
        state.isSaving = true;
      },
      clearLogout: ( state ) => {
        state.areas = [];
        state.records = [];
        state.isSaving = true;
      },
    }
});


// Action creators are generated for each case reducer function
export const { 
  clearLogout, 
  getAreas, 
  getRecords,
  savingNewRecord,
  setSaving,
  recorded,
} = appSlice.actions;