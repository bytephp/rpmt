// import ProjectListContent from './components/ProjectListContent'
import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'

const PropertiesList = () => {
    return (
        <Container className="h-full">
            <PageHeader pageTitle={'Properties'} href={'/properties/add'} addButtonTitle={'Add New Property'} />
            {/* <ProjectListContent /> */}
        </Container>
    )
}

export default PropertiesList
