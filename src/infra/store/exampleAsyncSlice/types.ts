import { PayloadAction } from '@reduxjs/toolkit'
import { GetClientRepositoriesType } from 'data/repositories/useGetRepositoriesWithRedux/types'

export type GetClientRepositoriesStateType = GetClientRepositoriesType

export type PayloadType = PayloadAction<GetClientRepositoriesStateType>
