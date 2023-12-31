import { Fragment } from 'react'
import { useEffect } from 'react'
import classNames from 'classnames'
import Avatar from '@/components/ui/Avatar'
import type { CommonProps } from '@/@types/common'


interface PropertyHeader extends CommonProps {
    projectDetails?: any
}

const PropertyHeader = (props: PropertyHeader) => {
    const {
        projectDetails
    } = props

    useEffect(() => {
    }, [])

    return (
        <div className="flex items-center justify-between my-4">
            <div className="flex items-start">
                <Avatar
                    size={"lg"}
                    className="mr-2"
                    shape="rounded"
                    src="/img/avatars/thumb-1.jpg"
                />
                <span>
                    <h3>projectDetails?.name</h3>
                    <p>Green Glen Layout, Bellandur, Banglore - 560103 </p>
                </span>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-end">
                    <p className="font-normal text-md mr-1">
                        RENTAL ID:
                    </p>
                    <p className="font-semibold h4 dark text-lg">
                        1263852
                    </p>
                </div>
                <div className="flex items-end">
                    <p className="font-normal text-md mr-1">
                        RENT:
                    </p>
                    <p className="font-semibold h4 dark text-lg">
                        $1,000.00
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PropertyHeader
