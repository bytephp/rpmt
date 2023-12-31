// import ProjectListContent from './components/propertyListContent'
import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
// import { DataTable } from '@/components/shared/table'
import ProjectListContent from './components/propertyListContent'

import { injectReducer } from '@/store'
import reducer from './store'
import { PropertyCardGrid } from '@/shared/propertyCard/PropertyCardGrid'
import { Card } from '@/components/ui'

// injectReducer('property', reducer)

const PropertiesList = () => {
    return (
        <Container className="h-full">

            <PageHeader pageTitle={'Properties'} href={'/properties/add'} addButtonTitle={'ADD NEW PROPERTY'} />
            <PropertyCardGrid />
            {/* <ProjectListContent /> */}
            {/* <DataTable /> */}
            
        </Container>
    )
}

export default PropertiesList
