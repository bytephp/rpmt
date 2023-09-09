import PropertyUnitTable from '../property-unit-table'
import PropertyOverviewAnalytics from '../property-show-overview-analytics'
import PropertyMaintenanceOverview from '../property-overview-maintenance'
import UnitLeaseList from './unitLeaseList'

type ProjectsProps = {
    data?: any
}

const PropertyUnitOverview = ({ data }: ProjectsProps) => {

    console.log(data);
    
    return (
        <>
            {/* <PropertyUnitTable /> */}
            <PropertyOverviewAnalytics />
            <UnitLeaseList projectList={data}/>
            {/* <PropertyMaintenanceOverview /> */}
        </>
    )
}

export default PropertyUnitOverview
