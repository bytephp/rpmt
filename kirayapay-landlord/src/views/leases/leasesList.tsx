import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
import LeasesListContent from './components/leasesListContent'

const LeasesList = () => {
    return (
        <Container className="h-full">
            <PageHeader pageTitle={'Leases'} href={'/leases/add'} addButtonTitle={'Add New Lease'} />
            {/* <ProjectListContent /> */}
            <LeasesListContent />
        </Container>
    )
}

export default LeasesList
