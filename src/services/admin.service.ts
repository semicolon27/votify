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

  public getAdminById = async (id: string) => {
    try {
      const res = await request.get('/admin/' + id)
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public addAdmin = async (username: string, name: string, password: string) => {
    try {
      const res = await request.post('/admin', {
        username,
        name,
        password,
      })
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public editAdmin = async (id: string, username: string, name: string, password: string) => {
    try {
      const res = await request.put('/admin/' + id, {
        username,
        name,
        password,
      })
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public deleteAdmin = async (id: string) => {
    try {
      const res = await request.delete('/admin/' + id)
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
