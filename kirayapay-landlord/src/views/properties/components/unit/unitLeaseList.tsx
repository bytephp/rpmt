import Table from '@/components/ui/Table'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useNavigate } from 'react-router-dom'
import { HiMiniArrowUpRight, HiOutlinePlusCircle } from 'react-icons/hi2'
import GridItem from '../GridItem'

const { Tr, Th, Td, THead, TBody } = Table

type ProjectsProps = {
    projectList?: any
}

const UnitLeaseList = ({ projectList }: ProjectsProps) => {

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
                New Leases
            </span>
        </Button>
    )


    return (
        <Card header="Leases" className='mb-2' bodyClass="p-2" headerExtra={headerExtraContent}>
            {projectList?.length > 0 &&(
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {projectList.map((project :any) => (
                        <GridItem key={project.id} data={project} />
                    ))}
                </div>
            )}
        </Card>

    )
}

export default UnitLeaseList
