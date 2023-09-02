import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
import PropertyMaintenanceOverview from '../properties/components/property-overview-maintenance'


const MaintenanceList = () => {
    return (
        <Container className="h-full">
            <PageHeader pageTitle={'Maintenance'} showSortButton={false} href={''} addButtonTitle='Create Request'/>
            <PropertyMaintenanceOverview />

        </Container>
    )
}

export default MaintenanceList
