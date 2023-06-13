import { AxiosError } from "axios";
import request from "../utils/request"

class VisionService {

  public getVisions = async () => {
    try {
      const res = await request.get('/visions')
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public getVisionById = async (id: string) => {
    try {
      const res = await request.get('/vision/' + id)
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public addVision = async (candidateid: string, vision: string) => {
    try {
      const res = await request.post('/vision', {
        candidateid,
        vision,
      })
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public editVision = async (id: string, candidateid: string, vision: string) => {
    try {
      const res = await request.put('/vision/' + id, {
        candidateid,
        vision,
      })
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public deleteVision = async (id: string) => {
    try {
      const res = await request.delete('/vision/' + id)
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }
}

export default VisionService
