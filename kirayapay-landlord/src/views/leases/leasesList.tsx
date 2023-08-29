import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'

const LeasesList = () => {
    return (
        <Container className="h-full">
            <PageHeader pageTitle={'Leases'} href={'/properties/add'} addButtonTitle={'Add New Lease'} />
            {/* <ProjectListContent /> */}
        </Container>
    )
}

export default LeasesList
