import { useRef } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
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

injectReducer('pageHeader', reducer)

interface PageHeader extends CommonProps {
    pageTitle?: string
    addButtonTitle?: string
    href?: string
}

const PageHeader = (props: PageHeader) => {
    const {
        pageTitle,
        addButtonTitle,
        href,
    } = props

    const dispatch = useAppDispatch()

    const inputRef = useRef(null)

    const view = useAppSelector((state) => state?.pageHeader?.data?.view)

    const { sort } = useAppSelector((state) => state?.pageHeader?.data?.query)

    const onViewToggle = () => {
        dispatch(toggleView(view === 'grid' ? 'list' : 'grid'))
    }

    const onToggleSort = () => {
        dispatch(toggleSort(sort === 'asc' ? 'desc' : 'asc'))
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
            <h3 className="mb-4 lg:mb-0">{pageTitle || ''}</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-1">
                <Input
                    ref={inputRef}
                    size="sm"
                    placeholder="Search"
                    prefix={<HiOutlineSearch className="text-lg" />}
                    onChange={handleInputChange}
                />
                <Tooltip title={view === 'grid' ? 'List view' : 'Grid view'}>
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
                <Tooltip title={`Sort: ${sort === 'asc' ? 'A-Z' : 'Z-A'}`}>
                    <Button
                        className="hidden md:flex"
                        variant="plain"
                        size="sm"
                        icon={
                            sort === 'asc' ? (
                                <HiOutlineSortAscending />
                            ) : (
                                <HiOutlineSortDescending />
                            )
                        }
                        onClick={onToggleSort}
                    />
                </Tooltip>
                {
                    addButtonTitle && <ActionLink to={href}>
                        <Button
                            size="sm"
                            variant="solid"
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
