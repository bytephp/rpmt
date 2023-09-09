import Table from '@/components/ui/Table'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useNavigate } from 'react-router-dom'
import { HiMiniArrowUpRight, HiOutlinePlusCircle } from 'react-icons/hi2'
import { Tag } from '@/components/ui'
import ProgressionBar from './ProgressionBar'
import UsersAvatarGroup from '@/components/shared/UsersAvatarGroup'
import { userList } from './GridItem'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

const { Tr, Th, Td, THead, TBody } = Table

function PropertyUnitTable() {
    const navigate = useNavigate()
    const onViewAllProjects = () => {
        navigate('/app/project/project-list')
    }
    const onViewProjectsUnit = (unitId: number) => {
        navigate('/properties/2/unit/1')
    }

    const headerExtraContent = (
        <Button
            size="sm"
            variant="twoTone"
            shape='circle'
            icon={<HiOutlinePlusCircle />}
            onClick={onViewAllProjects}
        >
            <span className='text-sm'>
                New Unit
            </span>
        </Button>
    )


    return (
        <Card header="Units & Rooms" className='mb-2' bodyClass="" headerExtra={headerExtraContent}>
            <div className="unit-card  border-top">
                <div className="flex items-center justify-between mb-3">
                    <h6 className="mb-1 text-sm font-medium">Flat: <span className="text-lg font-semibold">202, 2nd floor</span></h6>
                    <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
                        9 Month left
                    </Tag>
                </div>
                <ProgressionBar progression={10} />
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
                                {1} / {11}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Table>
                <THead>
                    <Tr>
                        <Th>Unit</Th>
                        <Th>Rent</Th>
                        <Th>Tenant</Th>
                        <Th></Th>
                    </Tr>
                </THead>
                <TBody>
                    <Tr>
                        <Td>403</Td>
                        <Td>$1000 </Td>
                        <Td>Maria Anders</Td>
                        <Td>
                            <Button
                                size="sm"
                                variant="twoTone"
                                color='blue-400'
                                shape='circle'
                                icon={<HiMiniArrowUpRight />}
                                onClick={() => { onViewProjectsUnit(1) }}
                            >
                                <span className='text-sm'>
                                    View Unit
                                </span>
                            </Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>403</Td>
                        <Td>$1000 </Td>
                        <Td>Maria Anders</Td>
                    </Tr>
                </TBody>
            </Table> */}
        </Card>

    )
}

export default PropertyUnitTable
