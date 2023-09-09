import Card from '@/components/ui/Card'
import ItemDropdown from './ItemDropdown'
// import Members from './Members'
import ProgressionBar from './ProgressionBar'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import UsersAvatarGroup from '@/components/shared/UsersAvatarGroup'
import Tag from '@/components/ui/Tag'


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
                <div className="flex justify-between">
                    <Link to={`/properties/${id}`}>
                        <h6>{name}</h6>
                    </Link>
                    <ItemDropdown />
                </div>
                <p className="mt-0">{desc || '362 Pin Oak Drive, Burbank, CA 91505'}</p>
                <div className="mt-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-lighter bg-gray-50 px-3 py-2 rounded mb-3">
                            <h6 className="mb-0">2 <span className="text-body fw-normal">Unit</span></h6>
                            <span>Rented</span>
                        </div>
                        <div className="bg-lighter bg-gray-50 px-3 py-2 rounded mb-3">
                            <h6 className="mb-0">1 <span className="text-body fw-normal">Unit</span></h6>
                            <span>unavilable</span>
                        </div>
                    </div>
                    {/* <Divider sx={{ my: '0 !important' }} /> */}
                    <hr />

                    <div className="unit-card my-4 border-top">
                        <div className="flex items-center justify-between mb-3">
                            <h6 className="mb-1 text-sm font-medium">Flat: <span className="text-lg font-semibold">202, 2nd floor</span></h6>
                            <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
                                9 Month left
                            </Tag>
                        </div>
                        <ProgressionBar progression={progression || 10} />
                        <div className="flex items-center justify-between mt-2">
                            {/* <Members members={member} /> */}
                            <UsersAvatarGroup
                                nameKey="userName"
                                imgKey="avatarImg"
                                avatarProps={{ size: 30 }}
                                users={userList}
                            />
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
                    <hr />

                    <div className="unit-card my-4 border-top">
                        <div className="flex items-center justify-between mb-3">
                            <h6 className="mb-1 text-sm font-medium">Flat: <span className="text-lg font-semibold">202, 2nd floor</span></h6>
                            <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
                                9 Month left
                            </Tag>
                        </div>
                        <ProgressionBar progression={progression || 10} />
                        <div className="flex items-center justify-between mt-2">
                            {/* <Members members={member} /> */}
                            <UsersAvatarGroup
                                nameKey="userName"
                                imgKey="avatarImg"
                                avatarProps={{ size: 30 }}
                                users={userList}
                            />
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
            </div>
        </Card>
    )
}

export default GridItem
