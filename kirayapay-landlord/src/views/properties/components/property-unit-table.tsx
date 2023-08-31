import Table from '@/components/ui/Table'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useNavigate } from 'react-router-dom'
import { HiMiniArrowUpRight, HiOutlinePlusCircle } from 'react-icons/hi2'

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
        <Card header="Units & Rooms" className='mb-2' bodyClass="p-0" headerExtra={headerExtraContent}>
            <Table>
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
            </Table>
        </Card>

    )
}

export default PropertyUnitTable
