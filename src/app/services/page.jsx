import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  import { Divider } from '@/components/divider'
  
  export const metadata = {
    title: 'Services',
  }

const features = [
  // {
  //   name: 'Healthcare Consulting',
  //   description: 'Elevate your healthcare strategies with tailored guidance in home health, physician practice, and pharmaceutical management, fostering strategic excellence in an ever-evolving landscape.',
  //   icon: CloudArrowUpIcon,
  // },
  {
    name: 'Revenue Cycle Management',
    description: 'Optimize your financial performance and operational efficiency through our comprehensive revenue cycle management solutions.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Medical Coding',
    description: 'Ensure precision and compliance in healthcare documentation with our meticulous medical coding services, facilitating seamless claims processing and maximizing reimbursement.',
    icon: CogIcon,
  },
  {
    name: 'Revenue Recovery',
    description: 'Unlock hidden revenue streams and boost financial resilience with our expert Revenue Recovery solutions to recover revenue that may have been overlooked or underutilized.',
    icon: ShieldCheckIcon,
  },
  // {
  //   name: 'Snowflake Consulting',
  //   description: 'Leverage the power of Snowflake to unlock new insights and drive business growth. Our expert consultants provide tailored solutions to optimize your data architecture, enhance data governance, and drive innovation.',
  //   icon: ServerIcon,
  // },
  // {
  //   name: 'Pharma Data Management',
  //   description: 'Advance your pharmaceutical research endeavors with strategic guidance tailored to your specific needs. From optimizing laboratory processes to enhancing data analytics capabilities, we offer expertise in LIMS, ELN, data analytics, and more.',
  //   icon: CogIcon,
  // },
  ]
  
  export default function ServicesPage() {
    return (
      <div className="relative bg-[#3c4c5e] py-24 sm:py-32 lg:py-40 rounded-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#0d9e85] sm:text-5xl mb-10">Services for your business</h2>
            <h3 className="text-pretty text-2xl font-semibold tracking-tight text-[#0d9e85] sm:text-3xl mb-10">Healthcare Consulting</h3>
            <p className="mt-2 text-lg/8 text-[#f0f7f5]">Elevate your healthcare strategies with tailored guidance in home health, physician practice, and pharmaceutical management, fostering strategic excellence in an ever-evolving landscape.</p>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root px-6 pb-8 h-[350px] rounded-xl bg-[#50657d]">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center bg-[#0d9e85] p-3 shadow-lg">
                        <feature.icon aria-hidden="true" className="size-8 text-[#f0f4f7]" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg/8 font-semibold tracking-tight text-[#f0f4f7]">{feature.name}</h3>
                    <p className="mt-5 text-base/7 text-[#f0f4f7]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Divider className="mt-20 mb-20 bg-[#0d9e85]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="text-pretty text-2xl font-semibold tracking-tight text-[#0d9e85] sm:text-3xl mb-10">Snowflake Consulting</h3>
            <p className="mt-2 text-lg/8 text-[#f0f7f5]">Leverage the power of Snowflake to unlock new insights and drive business growth. Our expert consultants provide tailored solutions to optimize your data architecture, enhance data governance, and drive innovation.</p>
          </div>
        </div>
        <Divider className="mt-20 mb-20 bg-[#0d9e85]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="text-pretty text-2xl font-semibold tracking-tight text-[#0d9e85] sm:text-3xl mb-10">Pharma Data Management</h3>
            <p className="mt-2 text-lg/8 text-[#f0f7f5]">Advance your pharmaceutical research endeavors with strategic guidance tailored to your specific needs. From optimizing laboratory processes to enhancing data analytics capabilities, we offer expertise in LIMS, ELN, data analytics, and more.</p>
          </div>
        </div>
      </div>
    )
  }
  