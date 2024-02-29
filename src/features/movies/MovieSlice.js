import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/Api/MovieApi';
import { APIKey } from "../../common/Api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
  const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
  return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
  const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
  return response.data;
});

export const fetchAsyncMovieorShowsDetails = createAsyncThunk('movies/fetchAsyncMovieorShowsDetails', async (id) => {
  const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
  return response.data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
  },
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log("Movies pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Movies fetched successfully");
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log("Movies fetch rejected");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Shows fetched successfully");
        state.shows = payload;
      })
      .addCase(fetchAsyncMovieorShowsDetails.fulfilled, (state, { payload }) => {
        console.log("Movie or Show details fetched successfully");
        state.selectedMovieOrShow = payload;
      });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
