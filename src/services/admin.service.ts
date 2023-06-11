import { AxiosError } from "axios";
import request from "../utils/request"

class AdminService {

  public getAdmins = async () => {
    try {
      const res = await request.get('/admins')
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }
}

export default AdminService
