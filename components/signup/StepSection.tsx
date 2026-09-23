import { Progress } from "@/components/ui/progress"
import { Check } from 'lucide-react'

type Props = {
  step: number
}

export default function StepSection({
  step
}: Props) {
  return (
    <div className='bg-white p-8 rounded-xl my-8'>
      <div className="uppercase text-sm font-semibold">Registration Process Step {step} of 3</div>
      <h2 className='font-bold text-3xl mb-4'>Identity Verification</h2>
      <Progress value={(step / 3) * 100} />

      <div className="mt-4 px-16 flex items-center justify-between w-full">
        <div className="flex gap-4 items-center ">
          <div className={`
            flex justify-center items-center rounded-full text-white 
            ${step > 1 ? "bg-green-500" : "bg-blue-500"} w-12 aspect-square
            `}>
            {step > 1 ? <Check /> : "1"}
          </div>
          <div className="">
            <div className="uppercase font-semibold">
              {step > 1 ? "Completed" : "Current"} Step 1
            </div>
            <div className="">
              Basic Info
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <div className={`
            flex justify-center items-center rounded-full 
            ${step > 2 ? "bg-green-500" : "bg-blue-500"} w-12 aspect-square
          `}>
            {step > 2 ? <Check /> : "2"}
          </div>
          <div className="">
            <div className="uppercase font-semibold">
              {step > 2 ? "Completed" : step === 2 ? "Current" : "Next"} Step 2
            </div>
            <div className="">
              Verification
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <div className={`
            flex justify-center items-center rounded-full 
            ${step === 3 ? "bg-green-500" : "bg-blue-500"} w-12 aspect-square
            `}>
            {step === 3 ? <Check /> : "3"}
          </div>
          <div className="">
            <div className="uppercase font-semibold">
              {step === 3 ? "Completed" : "Next"} Step 3
            </div>
            <div className="">
              Confirmation
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
