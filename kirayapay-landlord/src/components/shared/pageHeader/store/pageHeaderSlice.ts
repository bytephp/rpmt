import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetProjectList,
    apiGetScrumBoardtMembers,
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

type PageHeader = Project[]

type Query = {
    sort: 'asc' | 'desc' | ''
    search: ''
}

type GetPageHeaderRequest = Query

type GetPageHeaderResponse = PageHeader

type GetScrumBoardtMembersResponse = {
    allMembers: Member[]
}

type PutPageHeaderRequest = {
    id: string
    name: string
    desc: string
    totalTask?: number
    completedTask?: number
    progression: number
    member?: Omit<Member, 'email' | 'id'>[]
}

type PutPageHeaderResponse = PageHeader

export type PageHeaderState = {
    loading: boolean
    pageHeader: PageHeader
    allMembers: {
        value: string
        label: string
        img: string
    }[]
    view: 'grid' | 'list'
    query: Query
    newProjectDialog: boolean
}

export const SLICE_NAME = 'pageHeader'

export const getList = createAsyncThunk(
    SLICE_NAME + '/getList',
    async (data: GetPageHeaderRequest) => {
        const response = await apiGetProjectList<
            GetPageHeaderResponse,
            GetPageHeaderRequest
        >(data)
        return response.data
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
    async (data: PutPageHeaderRequest) => {
        const response = await apiPutProjectList<
            PutPageHeaderResponse,
            PutPageHeaderRequest
        >(data)
        return response.data
    }
)

const initialState: PageHeaderState = {
    loading: false,
    pageHeader: [],
    allMembers: [],
    view: 'grid',
    query: {
        sort: 'asc',
        search: '',
    },
    newProjectDialog: false,
}

const pageHeaderSlice = createSlice({
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
                state.pageHeader = action.payload
                state.loading = false
            })
            .addCase(getList.pending, (state) => {
                state.loading = true
            })
            .addCase(getMembers.fulfilled, (state, action) => {
                state.allMembers = action.payload
            })
            .addCase(putProject.fulfilled, (state, action) => {
                state.pageHeader = action.payload
            })
    },
})

export const { toggleView, toggleSort, setSearch } =
    pageHeaderSlice.actions

export default pageHeaderSlice.reducer
