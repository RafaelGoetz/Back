import apiMarvel from '../services/apiMarvel'

class IdControler {
  async show(request, response) {


    try {

      const { user } = request.params;

      const { data } = await apiMarvel.get(`&id=${user}`);


      return response.json({
        name: data.data.results,
      })

    // return response.json( { message: 'Hi!' })

    } catch (error) {
      return response.status(error.status || 400).json(error);
    }

  }
}

export default new IdControler();
