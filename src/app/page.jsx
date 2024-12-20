export default async function Home() {

  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0">
              <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl animate-fade-in">
                Your Trusted Partner for Healthcare Success
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 animate-fade-in">
                Empowering Healthcare Transformation through Collaborative Solutions for Optimal Patient Outcomes and Provider Wellbeing!
              </p>
              <div className="mt-10 flex items-center gap-x-6 animate-fade-in">
                <a
                  href="/contact"
                  className="rounded-md bg-[#0d9e85] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#25313f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25313f] transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </a>
                <a href="/about" className="text-sm/6 font-semibold text-gray-900 transition-all duration-300 hover:translate-x-2">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              alt=""
              src="/product/home.jpg"
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}
