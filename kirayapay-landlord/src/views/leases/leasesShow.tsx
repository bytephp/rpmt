import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
import LeaseShowContent from './components/leaseShowContent'

const LeasesShow = () => {
    return (
        <Container className="h-full">
            <PageHeader backButton={true} pageTitle={'Back'} showSortButton={false} showSearch={false} />
            {/* <ProjectListContent /> */}
            <LeaseShowContent />

            {/* <LeasesListContent /> */}
        </Container>
    )
}

export default LeasesShow
