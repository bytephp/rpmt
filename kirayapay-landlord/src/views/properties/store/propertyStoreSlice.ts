import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetProjectList,
    apiGetScrumBoardtMembers,
    apiGetProjectDetail,
    apiPutProjectList,
} from '@/services/ProjectService'

type Member = {
    id: string
    name: string
    email: string
    img: string
}

type Project = {
    id: number
    name: string
    category: string
    desc: string
    attachmentCount: number
    totalTask: number
    completedTask: number
    progression: number
    dayleft: number
    status: string
    member: Omit<Member, 'id' | 'email'>[]
}

type Property = Project[]

type Query = {
    sort: 'ASC' | 'DESC' | ''
    search: ''
}

type GetPropertyRequest = Query

type GetPropertyResponse = Property

type GetScrumBoardtMembersResponse = {
    allMembers: Member[]
}

type PutPropertyRequest = {
    id: string
    name: string
    desc: string
    totalTask?: number
    completedTask?: number
    progression: number
    member?: Omit<Member, 'email' | 'id'>[]
}

type PutPropertyResponse = Property

export type PropertyState = {
    loading: boolean
    property: Property
    allMembers: {
        value: string
        label: string
        img: string
    }[]
    view: 'grid' | 'list'
    query: Query
    newProjectDialog: boolean
}

export const SLICE_NAME = 'property'

export const getList = createAsyncThunk(
    SLICE_NAME + '/getList',
    async (data: GetPropertyRequest) => {
        const response: any = await apiGetProjectList<
            GetPropertyResponse,
            GetPropertyRequest
        >(data)
        return response.data?.data
    }
)
export const getDetail = createAsyncThunk(
    SLICE_NAME + '/getDetail',
    async (data: GetPropertyRequest) => {
        const response: any = await apiGetProjectDetail<
            GetPropertyResponse,
            GetPropertyRequest
        >(data)
        return response.data?.data
    }
)

export const getMembers = createAsyncThunk(
    SLICE_NAME + '/getMembers',
    async () => {
        const response =
            await apiGetScrumBoardtMembers<GetScrumBoardtMembersResponse>()
        const data = response.data.allMembers.map((item) => ({
            value: item.id,
            label: item.name,
            img: item.img,
        }))
        return data
    }
)

export const putProject = createAsyncThunk(
    SLICE_NAME + '/putProject',
    async (data: PutPropertyRequest) => {
        const response = await apiPutProjectList<
            PutPropertyResponse,
            PutPropertyRequest
        >(data)
        return response.data
    }
)

const initialState: PropertyState = {
    loading: false,
    property: [],
    allMembers: [],
    view: 'grid',
    query: {
        sort: 'ASC',
        search: '',
    },
    newProjectDialog: false,
}

const propertySlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {
        toggleView: (state, action) => {
            state.view = action.payload
        },
        toggleSort: (state, action) => {
            state.query.sort = action.payload
        },
        setSearch: (state, action) => {
            console.log(action);

            state.query.search = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getList.fulfilled, (state, action) => {
                state.property = action.payload
                state.loading = false
            })
            .addCase(getList.pending, (state) => {
                state.loading = true
            })
            .addCase(getMembers.fulfilled, (state, action) => {
                state.allMembers = action.payload
            })
            .addCase(putProject.fulfilled, (state, action) => {
                state.property = action.payload
            })
    },
})

export const { toggleView, toggleSort, setSearch } =
    propertySlice.actions

export default propertySlice.reducer
