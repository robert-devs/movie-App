// const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzVlMjU3OGE3NzQ0NDc3NTBlM2VjZDczOWRmM2EzZSIsInN1YiI6IjY0YjkxNDA3YWI2ODQ5MDBmZjQ5YjQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bw43qvtMxRW7VMlFXJ863NXtNhTVhNYeFU0ZLWzsG0k";

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
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
};
