import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features1 = [
  {
    name: 'Our Mission',
    description: 'Enhancing health outcomes through collaborative efforts, data analytics, technological innovation, and operational excellence services.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Our Vision',
    description: 'Revolutionizing healthcare delivery by integrating services and eliminating industry fragmentation, with a core focus on patient health.', 
    href: '#',
    icon: UsersIcon,
  },
]

const features2 = [
    {
      name: 'Customization',
      description: 'We understand that every practice is different. That\'s why we offer both turn-key solutions and tailored options to suit your specific requirements.',
      href: '#',
      icon: InboxIcon,
    },
    {
      name: 'Innovation',
      description: 'Innovation is at the heart of everything we do. We utilize cutting-edge telehealth strategies to coordinate care and improve accessibility for patients.', 
      href: '#',
      icon: UsersIcon,
    },
    {
      name: 'Analytics',
      description: 'We leverage the power of analytics to identify early warning signs of potential issues and take proactive measures to address them before they escalate.',
      href: '#',
      icon: TrashIcon,
    },
  ]

const features3 = [
{
    name: 'Health Outcomes Driver',
    description: 'Our focus is on improving patient outcomes, both during and after their time under your care. We work tirelessly to ensure that every patient experiences the best possible health outcomes.',
    href: '#',
    icon: InboxIcon,
},
{
    name: 'Quadruple Aim Strategy',
    description: 'We believe in going above and beyond the traditional Triple Aim strategy by adding an extra layer of focus on provider well-being, ensuring that everyone involved in the care process experiences positive outcomes.', 
    href: '#',
    icon: UsersIcon,
},
{
    name: 'Patient Focused',
    description: 'Above all, we are committed to putting patients first. By increasing patient engagement and satisfaction, we create a healthcare experience that is truly centered around the individual.',
    href: '#',
    icon: TrashIcon,
},
]

export default function AboutPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            About Us
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
          We specialize in consulting and revenue cycle management, offering innovative solutions tailored to your needs. Our flagship product, VigeoDASH, maximizes patient and business outcomes.
          With over 25 years of experience across the healthcare spectrum, we identify your challenges and establish frameworks for success. Let us guide you through the healthcare continuum. Partner with Healthcare Integrative Solutions today!
          </p>
        </div>
        <div className="bg-white mx-auto mt-16 max-w-7xl sm:mt-10 lg:mt-14 px-8 py-12 rounded-lg">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features1.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#0d9e85]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            What We Offer
          </h2>
        </div>
        <div className="bg-white mx-auto mt-16 max-w-7xl sm:mt-10 lg:mt-14 px-8 py-12 rounded-lg">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features2.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#0d9e85]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Differentiators
          </h2>
        </div>
        <div className="bg-white mx-auto mt-16 max-w-7xl sm:mt-10 lg:mt-14 px-8 py-12 rounded-lg">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features3.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#0d9e85]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
