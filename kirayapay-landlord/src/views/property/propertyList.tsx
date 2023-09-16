import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
import { PropertyCardGrid } from '@/shared/propertyCard/PropertyCardGrid'

const PropertyList = () => {
    return (
        <Container className="h-full">
            <PageHeader pageTitle={'Properties'} href={'/properties/add'} addButtonTitle={'ADD NEW PROPERTY'} />
            <PropertyCardGrid />
        </Container>
    )
}

export default PropertyList
