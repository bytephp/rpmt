import Card from '@/components/ui/Card'
// import Members from './Members'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import UsersAvatarGroup from '@/components/shared/UsersAvatarGroup'
import Tag from '@/components/ui/Tag'
import ProgressionBar from '@/views/properties/components/ProgressionBar'


export type GridItemProps = {
    data: {
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
        member: {
            name: string
            img: string
        }[]
    }
}
export const userList = [
    {
        userName: 'Ron Vargas',
        avatarImg: '/img/avatars/thumb-3.jpg',
    },
    {
        userName: 'Carolyn Hanson',
        avatarImg: '/img/avatars/thumb-9.jpg',
    },
    {
        userName: 'Samantha Phillips',
        avatarImg: '/img/avatars/thumb-6.jpg',
    },
    {
        userName: 'Ella Robinson',
        avatarImg: '/img/avatars/thumb-15.jpg',
    },
]
const GridItem = ({ data }: GridItemProps) => {
    const { name, totalTask, completedTask, progression, desc, member, id } = data

    return (
        <Card bodyClass="h-full">
            <div className="flex flex-col justify-between h-full">
                <h6 className="mb-2 text-sm font-medium">DRAFT LEASE</h6>
                <div className="flex items-center justify-between">
                    <Link to={`/leases/${id}`}>
                        <h6 className="mb-0 text-sm font-medium">Flat: <span className="text-lg font-semibold">202, 2nd floor</span></h6>
                        <p>{name}</p>
                    </Link>
                    <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
                        9 Month left
                    </Tag>
                </div>
                <p className="mt-0">{desc || '362 Pin Oak Drive, Burbank, CA 91505'}</p>

                <div className="">
                    <h6 className="mb-0 mt-2 text-sm font-semibold">Payment</h6>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-lighter bg-gray-50 px-3 py-2 rounded mb-3">
                            <h6 className="mb-0">Rs. 30,000</h6>
                            <span>Unpaid</span>
                        </div>
                        <div className="bg-lighter bg-gray-50 px-3 py-2 rounded mb-3">
                            <h6 className="mb-0">Rs. 0</h6>
                            <span>Past Due</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h6 className="mb-0 mt-2 text-sm font-semibold">Tenure</h6>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-lighter bg-gray-50 px-3 py-2 rounded mb-3">
                            <h6 className="mb-0">01/01/2023</h6>
                            <span>From</span>
                        </div>
                        <div className="bg-lighter bg-gray-50 px-3 py-2 rounded mb-3">
                            <h6 className="mb-0">01/01/2024</h6>
                            <span>To</span>
                        </div>
                    </div>
                </div>
                    <div className="unit-card mt-2">

                        <ProgressionBar progression={progression || 10} />
                        <div className="flex items-center justify-between mt-2">
                            {/* <Members members={member} /> */}
                            <div className="flex items-center">
                                <h6 className="mb-1 mr-2 text-sm font-medium">Tenants: </h6>

                                <UsersAvatarGroup
                                    nameKey="userName"
                                    imgKey="avatarImg"
                                    avatarProps={{ size: 30 }}
                                    users={userList}
                                />
                            </div>
                            
                            <div className="flex items-center rounded-full font-semibold text-xs">
                                <div className="flex items-center px-2 py-1 border border-gray-300 rounded-full">
                                    <HiOutlineClipboardCheck className="text-base" />
                                    <span className="ml-1 rtl:mr-1 whitespace-nowrap">
                                        {completedTask || 1} / {totalTask || 11}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </Card>
    )
}

export default GridItem
