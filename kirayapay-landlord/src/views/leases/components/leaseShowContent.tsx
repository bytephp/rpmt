import { useEffect } from 'react'
import classNames from 'classnames'
import Spinner from '@/components/ui/Spinner'
import { getDetail, useAppDispatch, useAppSelector } from '@/views/properties/store'

import { HiOutlineHome, HiOutlineUser, HiOutlinePhone, HiOutlineTrash, HiOutlineChevronLeft, HiOutlineChevronRight, HiChevronRight } from 'react-icons/hi'
import Tabs from '@/components/ui/Tabs'
import Badge from '@/components/ui/Badge'
import PropertyHeader from '@/views/properties/components/propertyHeader'
import Card from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import { HiFire, HiOutlineChatBubbleLeftRight, HiOutlinePlusCircle } from 'react-icons/hi2'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'

const { TabNav, TabList, TabContent } = Tabs


const LeaseShowContent = () => {

    const dispatch = useAppDispatch()

    const loading = useAppSelector((state) => state.property.data.loading)

    const { sort, search } = useAppSelector(
        (state) => state.property.data.query
    )
    const projectDetails = useAppSelector(
        (state) => state.property.data.property
    )[0]
    const headerExtraContent = (
        <Button
            size="sm"
            variant="twoTone"
            shape='circle'
            icon={<HiOutlinePlusCircle />}
        >
            <span className='text-sm'>
                Add Tenant
            </span>
        </Button>
    )

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

    useEffect(() => {
        dispatch(getDetail({ sort, search }))
    }, [dispatch, sort, search])
    const cardFooter = (
        <div className="flex">
            <Button size="sm" variant="solid" icon={<HiOutlineChatBubbleLeftRight />} className="ltr:mr-2 rtl:ml-2" />
            <Button size="sm" color='red' icon={<HiOutlineTrash />} className="ltr:mr-2 rtl:ml-2" />
        </div>
    )
    return (
        <div className={classNames('flex flex-col')} >
            {loading && (
                <div className="flex justify-center">
                    <Spinner size={40} />
                </div>
            )}
            <PropertyHeader projectDetails={projectDetails} />
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
                        {/* <PropertyOverview /> */}
                        <Card header="Tenants" className='mb-2' headerExtra={headerExtraContent}>
                            <Card bordered footer={cardFooter} className="mb-2">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <Avatar
                                                className="bg-emerald-500"
                                                shape="circle"
                                                size={'lg'}
                                                icon={<HiFire />}
                                            ></Avatar>
                                        </div>
                                        <div className='w-100'>
                                            <div className="flex items-center justify-between">
                                                <h6 className='capitalize'>Abhimanyu Sikarwar</h6>
                                            </div>
                                            <div>
                                                <p>
                                                    handsome-obrien@hotmail.com
                                                </p>
                                                <p>
                                                    +1 (541) 754-3010
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Card>
                        </Card>
                        <div className='mt-2'>
                            <h3 className="mb-1">Documents</h3>
                            <p>
                                Do you have all the right documents you need? Get 32 of our most useful forms every landlord and property manager needs to be covered for any situation.
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-2">
                                <Card bordered bodyClass='p-2' className="">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Avatar
                                                size={"sm"}
                                                className="mr-2"
                                                shape="rounded"
                                                src="/img/avatars/thumb-1.jpg"
                                            />
                                            <span>
                                                <h6>Get a Lease Agreement</h6>
                                                <p>
                                                    Get a customized lease in less than 15 minutes</p>
                                            </span>
                                        </div>
                                        <Avatar
                                            size={"sm"}
                                            className="mr-2 bg-white"
                                            shape="rounded"
                                            icon={<HiChevronRight />}
                                        />
                                    </div>
                                </Card>
                                <Card bordered bodyClass='p-2' className="">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Avatar
                                                size={"sm"}
                                                className="mr-2"
                                                shape="rounded"
                                                src="/img/avatars/thumb-1.jpg"
                                            />
                                            <span>
                                                <h6>Request Electronic Signatures</h6>
                                                <p>Upload any document you need signed</p>
                                            </span>
                                        </div>
                                        <Avatar
                                            size={"sm"}
                                            className="mr-2 bg-white"
                                            shape="rounded"
                                            icon={<HiChevronRight />}
                                        />
                                    </div>
                                </Card>
                                <Card bordered bodyClass='p-2' className="">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Avatar
                                                size={"sm"}
                                                className="mr-2"
                                                shape="rounded"
                                                src="/img/avatars/thumb-1.jpg"
                                            />
                                            <span>
                                                <h6>Build a Lease Addendum
                                                    </h6>
                                                <p>Amend your existing lease agreement</p>
                                            </span>
                                        </div>
                                        <Avatar
                                            size={"sm"}
                                            className="mr-2 bg-white"
                                            shape="rounded"
                                            icon={<HiChevronRight />}
                                        />
                                    </div>
                                </Card>
                                <Card bordered bodyClass='p-2' className="">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Avatar
                                                size={"sm"}
                                                className="mr-2"
                                                shape="rounded"
                                                src="/img/avatars/thumb-1.jpg"
                                            />
                                            <span>
                                                <h6>Upload Document
                                                    </h6>
                                                <p>Store and/or share lease documents</p>
                                            </span>
                                        </div>
                                        <Avatar
                                            size={"sm"}
                                            className="mr-2 bg-white"
                                            shape="rounded"
                                            icon={<HiChevronRight />}
                                        />
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </TabContent>
                </div>

            </Tabs>
        </div>
    )
}

export default LeaseShowContent
