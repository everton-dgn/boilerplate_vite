import { httpClientAdapter } from 'infra/adapters/httpClient'
import { errorApi } from 'data'
import { GetClientType } from './types'
import { ErrorApi } from 'data/errorApi/types'

export const getClient = async (url: string): Promise<GetClientType> => {
  try {
    const { data } = await httpClientAdapter.get(url)
    return { data, error: '' }
  } catch (e) {
    return { data: [], error: errorApi(e as ErrorApi) }
  }
}
