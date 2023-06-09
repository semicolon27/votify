import { AxiosError } from "axios";
import request from "../utils/request"

class ParticipantService {

  public getParticipants = async () => {
    try {
      const res = await request.get('/participants')
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public getParticipantByRegnumber = async (regnumber: string) => {
    try {
      const res = await request.get('/participant/' + regnumber)
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public addParticipant = async (regnumber: string, name: string, password: string) => {
    try {
      const res = await request.post('/participant', {
        regnumber,
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

  public editParticipant = async (regnumber: string, name: string, password: string) => {
    try {
      const res = await request.put('/participant/' + regnumber, {
        regnumber,
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

  public deleteParticipant = async (id: string) => {
    try {
      const res = await request.delete('/participant/' + id)
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }
}

export default ParticipantService
