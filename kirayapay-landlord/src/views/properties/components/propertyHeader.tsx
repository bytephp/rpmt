import { Fragment } from 'react'
import { useEffect } from 'react'
import classNames from 'classnames'
import Avatar from '@/components/ui/Avatar'

const PropertyHeader = () => {

    useEffect(() => {
    }, [])

    return (
        <>
            <div className="flex items-center">
                <Avatar
                    size={"lg"}
                    className="mr-2"
                    shape="rounded"
                    src="/img/avatars/thumb-1.jpg"
                />
                <span>
                    <h3>Sannidhi Paradise</h3>
                    <p>Green Glen Layout, Bellandur, Banglore - 560103 </p>
                </span>
            </div>
            <div className="flex items-center my-2">
                <div className="flex items-center mr-4">
                    <p className="font-normal text-md mr-1">
                        RENTAL ID:
                    </p>
                    <p className="font-semibold h4 dark text-lg">
                        1263852
                    </p>
                </div>
                <div className="flex items-center mr-4">
                    <p className="font-normal text-md mr-1">
                        RENT:
                    </p>
                    <p className="font-semibold h4 dark text-lg">
                        $1,000.00
                    </p>
                </div>
            </div>

        </>
    )
}

export default PropertyHeader
