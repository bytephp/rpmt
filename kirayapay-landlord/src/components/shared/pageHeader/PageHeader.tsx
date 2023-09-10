import { useRef, useState, useCallback } from 'react'
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
import Segment from '@/components/ui/Segment';

// injectReducer('pageHeader', reducer)

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
    const goBack = () => {
        backButton &&
            navigate(-1);
    }

    return (
        <div className="lg:flex items-center justify-between mb-4">
            <h3 className={`mb-4 lg:mb-0 flex items-center ${backButton && "cursor-pointer"}`} onClick={() => goBack()}>
                {backButton && <HiOutlineArrowLeft className='mr-2' />}
                {pageTitle || ''}
            </h3>
            <div className="flex flex-col md:flex-row md:items-center gap-1">
                {
                    addButtonTitle && <ActionLink to={href}>
                        <Button
                            size="md"
                            variant="twoTone"
                            shape='circle'
                            icon={<HiOutlinePlusCircle />}
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
