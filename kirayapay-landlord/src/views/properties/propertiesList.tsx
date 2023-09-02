// import ProjectListContent from './components/propertyListContent'
import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
// import { DataTable } from '@/components/shared/table'
import ProjectListContent from './components/propertyListContent'

import { injectReducer } from '@/store'
import reducer from './store'

injectReducer('property', reducer)

const PropertiesList = () => {
    return (
        <Container className="h-full">
            <PageHeader pageTitle={'Properties'} href={'/properties/add'} addButtonTitle={'ADD NEW PROPERTY'} />
            <ProjectListContent />
            {/* <DataTable /> */}
            
        </Container>
    )
}

export default PropertiesList
