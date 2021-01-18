import apiMarvelWHTOffset from '../services/apiMarvelWHTOffset'

class PagController {
  async show(request, response) {

    try {

      const { lt, of } = request.query;

      const { data } = await apiMarvelWHTOffset.get(`/data?offset=${of}&limit=${lt}`);

      return response.json( {data} )

    } catch (error) {
      return response.status(error.status || 400).json(error);
    }

  }
}

export default new PagController();


//&limit=100&offset=0
