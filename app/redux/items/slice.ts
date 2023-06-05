import { ItemCardModel } from '@/app/models/itemCardModel';
import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createItem, deleteItem, fetchItems } from './trunk';

export interface ItemsSlice {
  items: ItemCardModel[];
  itemsLoading: boolean;
  itemsError: string | null;
}

const initialState: ItemsSlice = {
  items: [],
  itemsLoading: false,
  itemsError: null
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.itemsLoading = true;
        state.itemsError = null;
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<ItemCardModel[]>) => {
        state.itemsLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.itemsLoading = false;
        state.itemsError = action.error.message as string;
      })
      .addCase(createItem.pending, (state) => {
        state.itemsError = null;
      })
      .addCase(createItem.fulfilled, (state, action: PayloadAction<ItemCardModel>) => {
      })
      .addCase(createItem.rejected, (state, action) => {
        state.itemsError = action.error.message as string;
      })
      .addCase(deleteItem.pending, (state) => {
        state.itemsError = null;
      })
      .addCase(deleteItem.fulfilled, (state, action: PayloadAction<any>) => {
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.itemsError = action.error.message as string;
      });
  },
});


const rootReducer = combineReducers({
  items: itemsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
