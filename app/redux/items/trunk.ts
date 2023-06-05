import { ItemCardModel } from "@/app/models/itemCardModel";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
  