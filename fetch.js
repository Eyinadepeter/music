export const url = `https://spotify81.p.rapidapi.com/top_200_tracks?country=NG&period=daily`;

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_X_RAPID_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_X_RAPID_API_HOST,
  },
};

export const fetchdata = async (url) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return "error";
  }
};
