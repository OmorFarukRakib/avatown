import { createSlice } from "@reduxjs/toolkit";
import { avatars } from "./initialState";
import {
  filterPolygon,
  filterPrice,
  filterAutoUpload,
  filterContent,
} from "./filteringFun";
const initialState = {
  total: avatars.length,
  filter: "All Items",
  filterGender: {
    code: 0,
    name: "All Items",
  },
  filterPrice: {
    code: 0,
    name: "",
  },
  filterPolygon: {
    code: 0,
    name: "",
  },
  filterAutoUploadSupport: {
    code: 0,
    name: "",
  },
  filterContents: {
    code: 0,
    name: "",
  },
  avatars: avatars,
};

const applyFiltering = (state) => {
  // Gender filtering
  if (state.filterGender.code === 0) {
    state.filterGender.name = "All Items";
    state.avatars = avatars;
  } else if (state.filterGender.code === 1) {
    state.filterGender.name = "Only Female";
    state.avatars = avatars.filter((avatar) => {
      return avatar.gender === "female";
    });
  } else if (state.filterGender.code === 2) {
    state.filterGender.name = "Only Male";
    state.avatars = avatars.filter((avatar) => {
      return avatar.gender === "male";
    });
  }

  state = filterPrice(state);
  state = filterPolygon(state);
  state = filterAutoUpload(state);
  state = filterContent(state);
  state.total = state.avatars.length;
  return state;
};

const avatarsSlice = createSlice({
  name: "avatars",
  initialState,
  reducers: {
    GenderFilter: (state, action) => {
      state.filterGender.code = action.payload;
      state = applyFiltering(state);
    },
    PriceFilter: (state, action) => {
      state.filterPrice.code = action.payload;
      state = applyFiltering(state);
    },
    PolygonFilter: (state, action) => {
      state.filterPolygon.code = action.payload;
      state = applyFiltering(state);
    },
    AutoUploadSupportFilter: (state, action) => {
      state.filterAutoUploadSupport.code = action.payload;
      state = applyFiltering(state);
    },
    ContentFilter: (state, action) => {
      state.filterContents.code = action.payload;
      state = applyFiltering(state);
    },
    SortAvatarList: (state, action) => {
      if (action.payload === 0) {
        state.avatars = state.avatars.sort((a, b) => a.id - b.id);
      } else if (action.payload === 1) {
        state.avatars = state.avatars.sort((a, b) => a.price - b.price);
      } else if (action.payload === 2) {
        state.avatars = state.avatars.sort((a, b) => b.price - a.price);
      } else if (action.payload === 3) {
        state.avatars = state.avatars.sort((a, b) => a.id - b.id);
      } else if (action.payload === 4) {
        state.avatars = state.avatars.sort((a, b) => a.polygon - b.polygon);
      } else if (action.payload === 5) {
        state.avatars = state.avatars.sort((a, b) => b.polygon - a.polygon);
      }
      },
  },
});

export default avatarsSlice.reducer;
export const {
  GenderFilter,
  PriceFilter,
  PolygonFilter,
  AutoUploadSupportFilter,
  ContentFilter,
  SortAvatarList,
} = avatarsSlice.actions;
