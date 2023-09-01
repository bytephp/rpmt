import { useRef } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useNavigate } from 'react-router-dom';
import Tooltip from '@/components/ui/Tooltip'
import {
    HiOutlinePlusCircle,
    HiOutlineSearch,
    HiOutlineViewGrid,
    HiOutlineViewList,
    HiOutlineSortAscending,
    HiOutlineSortDescending,
} from 'react-icons/hi'
import {
    toggleView,
    toggleSort,
    setSearch,
    useAppDispatch,
    useAppSelector,
} from './store'
import type { CommonProps } from '@/@types/common'
import debounce from 'lodash/debounce'
import type { ChangeEvent } from 'react'
import ActionLink from '../ActionLink'
import { injectReducer } from '@/store'
import reducer from './store'
import { HiOutlineArrowLeft } from 'react-icons/hi2'

injectReducer('pageHeader', reducer)

interface PageHeader extends CommonProps {
    pageTitle?: string
    addButtonTitle?: string
    href?: string
    showSortButton?: boolean
    showSearch?: boolean
    backButton?: boolean
}

const PageHeader = (props: PageHeader) => {
    const {
        pageTitle,
        addButtonTitle,
        backButton = false,
        href,
        showSortButton = true,
        showSearch = true,
    } = props

    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const inputRef = useRef(null)

    const view = useAppSelector((state) => state?.pageHeader?.data?.view)

    const { sort } = useAppSelector((state) => state?.pageHeader?.data?.query)

    const onViewToggle = () => {
        dispatch(toggleView(view === 'grid' ? 'list' : 'grid'))
    }
    const goBack = () => {
        backButton &&
            navigate(-1);
    }

    const onToggleSort = () => {
        dispatch(toggleSort(sort === 'ASC' ? 'DESC' : 'ASC'))
    }

    // const onAddNewProject = () => {        
    //     dispatch(toggleNewProjectDialog(true))
    // }

    const debounceFn = debounce(handleDebounceFn, 500)

    function handleDebounceFn(val: string) {
        dispatch(setSearch(val))
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        debounceFn(e.target.value)
    }

    return (
        <div className="lg:flex items-center justify-between mb-4">
            <h3 className={`mb-4 lg:mb-0 flex items-center ${backButton && "cursor-pointer"}`} onClick={() => goBack()}>
                {backButton && <HiOutlineArrowLeft className='mr-2' />}
                {pageTitle || ''}
            </h3>
            <div className="flex flex-col md:flex-row md:items-center gap-1">
                {
                    showSearch && <Input
                        ref={inputRef}
                        size="sm"
                        placeholder="Search"
                        prefix={<HiOutlineSearch className="text-lg" />}
                        onChange={handleInputChange}
                    />
                }
                {
                    showSortButton && <><Tooltip title={view === 'grid' ? 'List view' : 'Grid view'}>
                        <Button
                            className="hidden md:flex"
                            variant="plain"
                            size="sm"
                            icon={
                                view === 'grid' ? (
                                    <HiOutlineViewList />
                                ) : (
                                    <HiOutlineViewGrid />
                                )
                            }
                            onClick={() => onViewToggle()}
                        />
                    </Tooltip>
                        <Tooltip title={`Sort: ${sort === 'ASC' ? 'A-Z' : 'Z-A'}`}>
                            <Button
                                className="hidden md:flex"
                                variant="plain"
                                size="sm"
                                icon={
                                    sort === 'ASC' ? (
                                        <HiOutlineSortAscending />
                                    ) : (
                                        <HiOutlineSortDescending />
                                    )
                                }
                                onClick={onToggleSort}
                            />
                        </Tooltip></>
                }


                {
                    addButtonTitle && <ActionLink to={href}>
                        <Button
                            size="md"
                            variant="twoTone"
                            shape='circle'
                            icon={<HiOutlinePlusCircle />}
                        // onClick={onAddNewProject}
                        >
                            {addButtonTitle}
                        </Button>
                    </ActionLink>
                }


            </div>
        </div>
    )
}

export default PageHeader
