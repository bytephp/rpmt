import { useEffect } from 'react'
import classNames from 'classnames'
import Spinner from '@/components/ui/Spinner'
import PropertyHeader from './propertyHeader'
import { getDetail, useAppDispatch, useAppSelector } from '@/views/properties/store'

import { HiOutlineHome, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi'
import Tabs from '@/components/ui/Tabs'
import Badge from '@/components/ui/Badge'
import PropertyOverview from './property-show-overview'

const { TabNav, TabList, TabContent } = Tabs


const PropertyShowContent = () => {
    const dispatch = useAppDispatch()

    const loading = useAppSelector((state) => state.property.data.loading)

    const { sort, search } = useAppSelector(
        (state) => state.property.data.query
    )
    const projectDetails = useAppSelector(
        (state) => state.property.data.property
    )[0]

    
    useEffect(() => {
        dispatch(getDetail({ sort, search }))
    }, [dispatch, sort, search])

    return (
        <div className={classNames('flex flex-col')} >
            {loading && (
                <div className="flex justify-center">
                    <Spinner size={40} />
                </div>
            )}
            <PropertyHeader projectDetails={projectDetails}/>
            <Tabs defaultValue="OVERVIEW">
                <TabList>
                    <TabNav value="OVERVIEW" icon={<HiOutlineHome />}>
                        OVERVIEW
                    </TabNav>
                    <TabNav value="MAINTENANCE" icon={<HiOutlinePhone />}>
                        MAINTENANCE <Badge
                            className="ml-2 "
                            content={'2'}
                            innerClass="bg-red-50 text-red-500"
                        />
                    </TabNav>
                    <TabNav value="PAYMENTS" icon={<HiOutlinePhone />}>
                        PAYMENTS
                    </TabNav>
                </TabList>
                <div className="py-4">
                    <TabContent value="OVERVIEW">
                        <PropertyOverview />
                    </TabContent>
                </div>
                
            </Tabs>
        </div>
    )
}

export default PropertyShowContent
