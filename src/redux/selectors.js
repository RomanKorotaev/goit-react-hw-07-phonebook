import { createSelector } from '@reduxjs/toolkit'

export const getContacts = state =>state.contacts;
export const getFilterValue = state =>state.filterValue;
export const getLoading = state =>state.loading;