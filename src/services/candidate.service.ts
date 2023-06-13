import { AxiosError } from "axios";
import request from "../utils/request"

class CandidateService {

  public getCandidates = async () => {
    try {
      const res = await request.get('/candidates')
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public getCandidateById = async (id: string) => {
    try {
      const res = await request.get('/candidate/' + id)
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public addCandidate = async (option: string, name: string, label: string, image: string) => {
    try {
      const res = await request.post('/candidate', {
        option,
        name,
        label,
        image,
      })
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public editCandidate = async (id: string, option: string, name: string, label: string, image: string) => {
    try {
      const res = await request.put('/candidate/' + id, {
        option,
        name,
        label,
        image,
      })
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }

  public deleteCandidate = async (id: string) => {
    try {
      const res = await request.delete('/candidate/' + id)
      return res.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw Error(err.response?.data.error ?? 'Terjadi kesalahan, ' + err.response?.status ?? err)
      }
      throw Error('Terjadi kesalahan.')
    }
  }
}

export default CandidateService
