import { AxiosError } from "axios";
import request from "../utils/request"

class MissionService {

  public getMissions = async () => {
    try {
      const res = await request.get('/missions')
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public getMissionById = async (id: string) => {
    try {
      const res = await request.get('/mission/' + id)
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public addMission = async (candidateid: string, mission: string) => {
    try {
      const res = await request.post('/mission', {
        candidateid,
        mission,
      })
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public editMission = async (id: string, candidateid: string, mission: string) => {
    try {
      const res = await request.put('/mission/' + id, {
        candidateid,
        mission,
      })
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public deleteMission = async (id: string) => {
    try {
      const res = await request.delete('/mission/' + id)
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }
}

export default MissionService
