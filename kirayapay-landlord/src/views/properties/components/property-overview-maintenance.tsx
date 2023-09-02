import Table from '@/components/ui/Table'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useNavigate } from 'react-router-dom'
import { HiFire, HiOutlinePlusCircle } from 'react-icons/hi2'
import Avatar from '@/components/ui/Avatar'
import { Tag } from '@/components/ui'

const { Tr, Th, Td, THead, TBody } = Table

function PropertyMaintenanceOverview() {
    const navigate = useNavigate()
    const onViewAllProjects = () => {
        navigate('/app/project/project-list')
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
                Create Request
            </span>
        </Button>
    )


    return (
        <Card header="Open Maintenance" className='mb-2' headerExtra={headerExtraContent}>
            <Card bordered className="mb-2">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div>
                            <Avatar
                                className="bg-emerald-500"
                                shape="circle"
                                icon={<HiFire />}
                            ></Avatar>
                        </div>
                        <div className='w-100'>
                            <div className="flex items-center justify-between">
                                <h6 className='capitalize'>door not open</h6>
                                <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 rounded-md border-0 mx-2">
                                    <span className="capitalize">
                                        Open
                                    </span>
                                </Tag>
                            </div>
                            <div>
                                <span>
                                    Requested by You in 403
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Card bordered className="mb-2">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div>
                            <Avatar
                                className="bg-emerald-500"
                                shape="circle"
                                icon={<HiFire />}
                            ></Avatar>
                        </div>
                        <div className='w-100'>
                            <div className="flex items-center justify-between capitalize">
                                <h6>door not open</h6>
                                <Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 rounded-md border-0 mx-2">
                                    <span className="capitalize">
                                        Open
                                    </span>
                                </Tag>
                            </div>
                            <div>
                                <span>
                                    Requested by You in 403
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            {/* <Table>
                <THead>
                    <Tr>
                        <Th>Unit</Th>
                        <Th>Rent</Th>
                        <Th>Tenant</Th>
                    </Tr>
                </THead>
                <TBody>
                    <Tr>
                        <Td>403</Td>
                        <Td>$1000 </Td>
                        <Td>Maria Anders</Td>
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

export default PropertyMaintenanceOverview
