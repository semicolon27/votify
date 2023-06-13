import axios, { AxiosError, AxiosResponse } from "axios"
import request from "../utils/request"

class AuthService {

  public loginAdmin = async (username: string, password: string) => {
    try {
      // this.cobaajainimah()
      // const res: AxiosResponse = await request.post('/admin/login', {
      const res: AxiosResponse = await request.post('/admin/login', {
        username,
        password,
      })
      return res.data
    } catch (error: unknown) {
      alert(error)
      if (error instanceof AxiosError) {
        throw Error(error.response?.data.error ?? 'Terjadi kesalahan, ' + error.response?.status ?? error)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public loginParticipant = async (regnumber = '', password = '') => {
    const res = await request.post('/participant/login', {
      regnumber, password
    })
    if (res.status == 200) return res.data
    throw Error(res.data.error)
  }
}

export default AuthService;