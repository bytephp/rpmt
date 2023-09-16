import PropertyUnitTable from './property-unit-table'
import PropertyOverviewAnalytics from './property-show-overview-analytics'
import PropertyMaintenanceOverview from './property-overview-maintenance'

type ProjectsProps = {
    data?: []
}

const PropertyOverview = ({ data = [] }: ProjectsProps) => {


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
            <PropertyUnitTable />
            {/* <PropertyOverviewAnalytics /> */}
            <PropertyMaintenanceOverview />
        </div>
    )
}

export default PropertyOverview
