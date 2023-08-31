import Table from '@/components/ui/Table'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useNavigate } from 'react-router-dom'
import { HiOutlinePlusCircle } from 'react-icons/hi2'

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
                New Maintenance
            </span>
        </Button>
    )


    return (
        <Card header="Open Maintenance" className='mb-2' bodyClass="p-0" headerExtra={headerExtraContent}>
            <Table>
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
            </Table>
        </Card>

    )
}

export default PropertyMaintenanceOverview
