export const getMovies = async () => {
 const baseUrl = process.env.REACT_APP_BASE_URL;

    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

  try {
    const response = await fetch(`${baseUrl}/3/movie/popular`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const result = await response.json();
    console.log(result.results); 
    return result.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error(error.message);
  }
};
