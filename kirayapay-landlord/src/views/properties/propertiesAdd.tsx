// import ProjectListContent from './components/propertyListContent'
import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
// import { DataTable } from '@/components/shared/table'
import ProjectListContent from './components/propertyListContent'

import { injectReducer } from '@/store'
import reducer from './store'
import { PropertyCardGrid } from '@/shared/propertyCard/PropertyCardGrid'
import { Card } from '@/components/ui'
import { PropertySteps } from '@/shared/add-property'

// injectReducer('property', reducer)

const PropertiesAdd = () => {
    return (
        <Container className="h-full">

            <PageHeader pageTitle={'Back'} backButton={true}/>
            <PropertySteps />

            {/* <PropertyCardGrid /> */}
            {/* <ProjectListContent /> */}
            {/* <DataTable /> */}
            
        </Container>
    )
}

export default PropertiesAdd
