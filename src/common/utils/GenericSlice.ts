import { ConnectionStatus } from "../models/ConnectionStatus";
import { createSlice, createAsyncThunk, Slice } from '@reduxjs/toolkit';


interface SliceNetworkStage<T>{
    data: T;
    status: ConnectionStatus;
    error: string | null;
}

export function createAsyncSlice<T, R>(
    name: string,
    asyncThunk: ReturnType<typeof createAsyncThunk<any, any, any>>,
    initialData: T
  ): Slice<SliceNetworkStage<T>> {
    const initialState: SliceNetworkStage<T> = {
      data: initialData,
      status: ConnectionStatus.IDLE,
      error: null,
    };
  
    return createSlice({
      name,
      initialState,
      reducers: {},
      extraReducers: (builder: any) => {
        builder
          .addCase(asyncThunk.pending, (state: any) => {
            state.status = ConnectionStatus.LOADING;
          })
          .addCase(asyncThunk.fulfilled, (state:any, action:any) => {
            state.status = ConnectionStatus.SUCCEEDED;
            state.data = action.payload;
          })
          .addCase(asyncThunk.rejected, (state:any, action:any) => {
            state.status = ConnectionStatus.FAILED;
            state.error = action.error.message || 'Something went wrong';
          });
      },
    });
  }