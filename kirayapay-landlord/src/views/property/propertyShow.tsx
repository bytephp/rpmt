import Container from '@/components/shared/Container'
import { PageHeader } from '@/components/shared/pageHeader'
import PropertyShowContent from '../properties/components/propertyShowContent'

const PropertyShow = () => {
    return (
        <Container className="h-full">
            {/* <PageHeader backButton={true} pageTitle={'Back'} showSortButton={false} showSearch={false} /> */}
            <PropertyShowContent />

        </Container>
    )
}

export default PropertyShow
