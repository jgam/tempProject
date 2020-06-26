import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  res.render("movies", { siteName: "home" });
};
export const movieDetail = (req, res) => {
  res.render("detail", { siteName: "detail" });
};
export const filterMovie = (req, res) => {
  res.render("movies", { siteName: "filtered" });
};
