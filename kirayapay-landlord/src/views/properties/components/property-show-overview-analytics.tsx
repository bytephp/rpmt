import { useMemo } from 'react'
import DoubleSidedImage from '@/components/shared/DoubleSidedImage'
import Card from '@/components/ui/Card'

const CategoryIcon = ({ type }: { type: string }) => {
    const iconTypeProps = useMemo(() => {
        return {
            src: `/img/thumbs/help-center-category-${type}.png`,
            darkModeSrc: `/img/thumbs/help-center-category-${type}-dark.png`,
        }
    }, [type])

    return <DoubleSidedImage {...iconTypeProps} alt="" />
}
function PropertyOverviewAnalytics() {

    return (
        <div className="grid mb-2 grid-cols-3  gap-2">
            <Card clickable >
                {/* <div className="mb-4 flex justify-center">
                    <CategoryIcon type={"help-center-category-4"} />
                </div> */}
                <div className="text-center">
                    <h5 className="mb-1">{"LEADS"}</h5>
                    <strong>{"00"} </strong>
                </div>
            </Card>
            <Card clickable >
                {/* <div className="mb-4 flex justify-center">
                    <CategoryIcon type={"help-center-category-4"} />
                </div> */}
                <div className="text-center">
                    <h5 className="mb-1">{"APPLICANTS"}</h5>
                    <strong>{"00"} </strong>
                </div>
            </Card>
            <Card clickable >
                {/* <div className="mb-4 flex justify-center">
                    <CategoryIcon type={"help-center-category-4"} />
                </div> */}
                <div className="text-center">
                    <h5 className="mb-1">{"TENANTS"}</h5>
                    <strong>{"00"} </strong>
                </div>
            </Card>
        </div>
    )
}

export default PropertyOverviewAnalytics
