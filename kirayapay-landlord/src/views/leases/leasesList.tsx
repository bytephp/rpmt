import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
import LeasesListContent from './components/leasesListContent'
import { LeasesLists } from '@/shared/lease'

const LeasesList = () => {
    return (
        <Container className="h-full">
            <LeasesLists />
            {/* <PageHeader pageTitle={'Leases'} href={'/leases/add'} addButtonTitle={'Add New Lease'} /> */}
            {/* <ProjectListContent /> */}
            {/* <LeasesListContent /> */}
        </Container>
    )
}

export default LeasesList
