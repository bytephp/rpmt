// import ProjectListContent from './components/propertyListContent'
import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
import PropertyShowContent from './components/propertyShowContent'
// import { DataTable } from '@/components/shared/table'
// import ProjectListContent from './components/propertyListContent'

const PropertiesShow = () => {
    return (
        <Container className="h-full">
            <PageHeader backButton={true} pageTitle={'Back'} showSortButton={false} showSearch={false} />
            <PropertyShowContent />
            {/* <ProjectListContent /> */}
            {/* <DataTable /> */}
        </Container>
    )
}

export default PropertiesShow
