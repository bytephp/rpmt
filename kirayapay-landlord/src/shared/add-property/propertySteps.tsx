import { useState } from 'react'
import Steps from '@/components/ui/Steps'
import Button from '@/components/ui/Button'
import { PropertyType } from './propertyType'
import { PropertyAddress } from './propertyAddress'

export const PropertySteps = () => {
    const [step, setStep] = useState(0)

    const onChange = (nextStep: number) => {
        if (nextStep < 0) {
            setStep(0)
        } else if (nextStep > 3) {
            setStep(3)
        } else {
            setStep(nextStep)
        }
    }

    const onNext = () => onChange(step + 1)

    const onPrevious = () => onChange(step - 1)

    return (
        <div>
            <Steps current={step}>
                <Steps.Item title="Property Type" />
                <Steps.Item title="Property Address" />
                <Steps.Item title="Unit Details" />
                <Steps.Item title="Summary" />
            </Steps>
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                {step === 0 && <PropertyType />}
                {step === 1 && <PropertyAddress />}
                {step === 2 && <div>Unit Details</div>}
                {step === 3 && <div>Summary</div>}
            </div>
            <div className="mt-4 text-right">
                <Button
                    className="mx-2"
                    disabled={step === 0}
                    onClick={onPrevious}
                >
                    Previous
                </Button>
                <Button disabled={step === 3} variant="solid" onClick={onNext}>
                    {step === 3 ? 'Completed' : 'Next'}
                </Button>
            </div>
        </div>
    )
}