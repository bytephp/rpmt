import { useEffect } from 'react'
import classNames from 'classnames'
import Spinner from '@/components/ui/Spinner'
import PropertyHeader from './propertyHeader'
import { getDetail, useAppDispatch, useAppSelector } from '@/views/properties/store'

import { HiOutlineHome, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi'
import Tabs from '@/components/ui/Tabs'
import Badge from '@/components/ui/Badge'
import PropertyOverview from './property-show-overview'
import DepositWithdrawalTable from './DepositWithdrawalTable'
import PropertyMaintenanceOverview from './property-overview-maintenance'

const { TabNav, TabList, TabContent } = Tabs


const PropertyShowContent = () => {
    
    // const dispatch = useAppDispatch()

    // const loading = useAppSelector((state) => state.property.data.loading)

    // const { sort, search } = useAppSelector(
    //     (state) => state.property.data.query
    // )
    // const projectDetails = useAppSelector(
    //     (state) => state.property.data.property
    // )[0]
    
    const transactionData = [
        {
            "id": "BxwE2fNELZ",
            "date": 1660132800,
            "amount": 4522.75,
            "status": 1
        },
        {
            "id": "G1xtpaE76e",
            "date": 1659132800,
            "amount": 5761.13,
            "status": 0
        },
        {
            "id": "hpqMH7sUc4",
            "date": 1658132800,
            "amount": 9762.43,
            "status": 0
        },
        {
            "id": "WAYL1VDzQ2",
            "date": 1657332800,
            "amount": 1123.56,
            "status": 2
        },
        {
            "id": "KEzIP7m6Dn",
            "date": 1656232800,
            "amount": 3276.14,
            "status": 0
        },
        {
            "id": "UumwPM9ZOY",
            "date": 1655532800,
            "amount": 5422.05,
            "status": 0
        },
        {
            "id": "INfkGxbeFR",
            "date": 1654932800,
            "amount": 1258.39,
            "status": 1
        },
        {
            "id": "0p1ozYRslq",
            "date": 1654132800,
            "amount": 9858.17,
            "status": 0
        }
    ]
    
    // useEffect(() => {
    //     dispatch(getDetail({ sort, search }))
    // }, [dispatch, sort, search])

    return (
        <div className={classNames('flex flex-col')} >
            {false && (
                <div className="flex justify-center">
                    <Spinner size={40} />
                </div>
            )}
            <PropertyHeader/>
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
                    <TabContent value="MAINTENANCE">
                        <PropertyMaintenanceOverview />
                    </TabContent>
                    <TabContent value="PAYMENTS">
                        {/* <PropertyOverview /> */}
                        <DepositWithdrawalTable
                            data={transactionData}
                            // loading={loading}
                            // tableData={tableData}
                        />
                    </TabContent>
                </div>
                
            </Tabs>
        </div>
    )
}

export default PropertyShowContent
