import { ItemCardModel } from '@/app/models/itemCardModel';
import { combineReducers, createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

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

export const fetchItems: any = createAsyncThunk<ItemCardModel[]>('items/fetchItems', async () => {
  try {
    const response = await fetch('https://thefridge-api.karapincha.io/fridge');
    const items = await response.json();
    return items;
  } catch (error) {
    throw new Error('Failed to fetch items');
  }
});

export const createItem: any  = createAsyncThunk<ItemCardModel, ItemCardModel>('items/createItem', async (payload: ItemCardModel, { dispatch }) => {
  try {
    console.log(JSON.stringify(payload) );
    const response = await fetch('https://thefridge-api.karapincha.io/fridge', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const item = await response.json();
    dispatch(fetchItems());
    return item;
  } catch (error) {
    throw new Error('Failed to create item');
  }
});

export const deleteItem: any = createAsyncThunk<string, string>('items/deleteIItem', async (payload: string, { dispatch }) => {
  try {
    const response = await fetch('https://thefridge-api.karapincha.io/fridge/' + payload, {
      method: 'DELETE',      
    });
    const deleteRes = await response.json();
    dispatch(fetchItems());
    return deleteRes;
  } catch (error) {
    throw new Error('Failed to delete item');
  }
});

export const itemsSlice = createSlice({
  name: 'Items',
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
