// import ProjectListContent from './components/propertyListContent'
import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
import PropertyUnitShowContent from './components/unit/propertyUnitShowContent'

const PropertyUnitShow = () => {
    return (
        <Container className="h-full">
            <PageHeader backButton={true} pageTitle={'Back'} showSortButton={false} showSearch={false} />
            <PropertyUnitShowContent />
            {/* <ProjectListContent /> */}
            {/* <DataTable /> */}
        </Container>
    )
}

export default PropertyUnitShow
