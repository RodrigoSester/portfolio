import { api } from 'src/boot/axios';


class ExperienceService {

  async getAll() {
    return await api.get('/experiences').then(result => { return result.data }).catch(error => { console.log(error) });
  }
}

export default new ExperienceService();