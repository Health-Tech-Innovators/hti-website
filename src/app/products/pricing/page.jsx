import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Essential',
    id: 'tier-essential',
    href: '/contact',
    // priceMonthly: '$',
    description: 'Ideal for organizations that require process transparency for existing teams',
    features: [
      {
        main: 'VigeoDASH Billing',
        sub: ['Claim Management', 'Denial Management', 'Patient Statements', 'Billing Reports'  ]
      },
    ],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '/contact',
    // priceMonthly: '$',
    description: 'Designed for organizations that require operational and business intelligence for existing teams',
    features: [
      {
        main: 'VigeoDASH Billing',
        sub: ['Claim Management', 'Denial Management', 'Patient Statements', 'Billing Reports'  ]
      },
      {
        main: 'VigeoDASH Clinical',
        sub: ['Productivity', 'Patient Census', 'PDGM Management']
      },
    ],
    mostPopular: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contact',
    // priceMonthly: '$',
    description: 'Perfect for organizations that require process transparency and resources for complete Revenue Cycle Management',
    features: [
      {
        main: 'VigeoDASH Billing',
        sub: ['Claim Management', 'Denial Management', 'Patient Statements', 'Billing Reports'  ]
      },
      {
        main: 'VigeoDASH Clinical',
        sub: ['Productivity', 'Patient Census', 'PDGM Management']
      },
      {
        main: 'Revenue Cycle Management Services',
        sub: ['Optional Coding Services', 'Optional Home Health Consulting Services', 'Optional Revenue Recovery']
      },
    ],
    mostPopular: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const metadata = {
  title: 'Products',
}

export default async function ProductsPage() {

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-6xl text-center">
                <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#0d9e85] sm:text-5xl">
                  With our dynamic dashboard, unlock the power of your data to improve
                </p>
              </div>
              <p className="mx-auto mt-6 max-w-1xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
              Utilize billing information with our claim transparency feature for comprehensive RCM insights, spanning admission to collections.
              Improve payer partnerships by harnessing performance metrics for more effective negotiation strategies.
              Access proactive analytics for real-time cash flow management, rather than waiting until month-end.
              Use insights from your clinical operations to reduce indirect costs and maximize your revenue.
              </p>
              <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {tiers.map((tier, tierIdx) => (
                  <div
                    key={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                      tierIdx === 0 ? 'lg:rounded-r-none' : '',
                      tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                      'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10',
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-x-4">
                        <h3
                          id={tier.id}
                          className={classNames(
                            tier.mostPopular ? 'text-[#0d9e85]' : 'text-gray-900',
                            'text-lg/8 font-semibold',
                          )}
                        >
                          {tier.name}
                        </h3>
                        {tier.mostPopular ? (
                          <p className="rounded-full bg-[#0d9e85]/10 px-2.5 py-1 text-xs/5 font-semibold text-[#0d9e85]">
                            Most popular
                          </p>
                        ) : null}
                      </div>
                      <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
                      <p className="mt-6 flex items-baseline gap-x-1">
                        {/* <span className="text-4xl font-semibold tracking-tight text-gray-900">{tier.priceMonthly}</span> */}
                        {/* <span className="text-sm/6 font-semibold text-gray-600">/month</span> */}
                      </p>
                      <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                        {tier.features.map((feature) => (
                          <li key={typeof feature === 'string' ? feature : feature.main} className="flex gap-x-3">
                            <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#0d9e85]" />
                            {typeof feature === 'string' ? (
                              feature
                            ) : (
                              <div>
                                {feature.main}
                                <ul className="ml-5 mt-2 space-y-2">
                                  {feature.sub.map((subFeature) => (
                                    <li key={subFeature} className="text-sm text-gray-500 flex items-center gap-x-1">
                                      <CheckIcon aria-hidden="true" className="h-3 w-3 flex-none text-[#0d9e85]" /> 
                                      {subFeature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.mostPopular
                          ? 'bg-[#0d9e85] text-white shadow-sm hover:bg-[#25313f]'
                          : 'text-[#0d9e85] ring-1 ring-inset ring-indigo-200 hover:ring-[#25313f]',
                        'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d9e85]',
                      )}
                    >
                      Schedule Demo
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
