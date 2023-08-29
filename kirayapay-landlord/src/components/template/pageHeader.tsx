import { HiOutlineMenuAlt2, HiOutlineMenu } from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'

export interface PageHeaderProps extends CommonProps {
    toggled?: boolean
}

const PageHeader = ({ toggled, className }: PageHeaderProps) => {
    return (
        <div className="lg:flex items-center justify-between mb-4">
            <h3 className="mb-4 lg:mb-0">Project List</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-1">
                <span className="input-wrapper undefined">
                    <div className="input-suffix-start">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    {/* <input className="input input-sm h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600" type="text" placeholder="Search" style="padding-left: 2.125rem;"> */}
                </span>
                <span className="tooltip-wrapper">
                    <button className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 w-9 inline-flex items-center justify-center text-lg hidden md:flex">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                        </svg>
                    </button>
                </span>
                <span className="tooltip-wrapper">
                    <button className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 w-9 inline-flex items-center justify-center text-lg hidden md:flex">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"></path>
                        </svg>
                    </button>
                </span>
                <button className="button bg-indigo-50 dark:bg-indigo-500 dark:bg-opacity-20 hover:bg-indigo-100 dark:hover:bg-indigo-500 dark:hover:bg-opacity-30 active:bg-indigo-200 dark:active:bg-indigo-500 dark:active:bg-opacity-40 text-indigo-600 dark:text-indigo-50 radius-round h-9 px-3 py-2 text-sm">
                    <span className="flex items-center justify-center">
                        <span className="text-lg">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </span>
                        <span className="ltr:ml-1 rtl:mr-1">New Project</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default PageHeader
