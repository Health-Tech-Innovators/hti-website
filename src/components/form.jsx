'use client'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: `${e.target.firstName.value} ${e.target.lastName.value}`,
          email: e.target.email.value,
          phone: e.target.phoneNumber.value,
          message: e.target.message.value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        e.target.reset()
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-wrap items-end justify-center gap-4">
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 lg:w-1/2">
              </div>
              <h2 className="text-pretty text-4xl tracking-tight text-gray-900 sm:text-5xl">
                Get in touch
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                  Ready to Transform Your Business? Connect with Us!
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    San Antonio, Texas
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    <a href="tel:+1 (210) 988 6063" className="hover:text-gray-900">
                      +1 (210) 202 6265
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                  </dt>
                  <dd>
                    <a href="mailto:nsankrithi@healthtechinnovators.ai" className="hover:text-gray-900">
                      info@healthtechinnovators.ai
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-0 space-y-4">
                  <dt className="flex-none">
                      <span className="sr-only">Schedule Demo</span>
                  </dt>
                  <dd>
                      <a href="https://calendly.com/healthtechinnovators-support/30min" target="_blank" rel="noopener noreferrer">
                          <button 
                              type="submit"
                              className="rounded-md bg-[#0d9e85] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#25313f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                              Schedule Demo
                          </button>
                      </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              {submitStatus === 'success' && (
                <div className="mb-4 rounded-md bg-green-50 p-4">
                  <p className="text-sm text-green-700">Message sent successfully!</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 rounded-md bg-red-50 p-4">
                  <p className="text-sm text-red-700">Failed to send message. Please send us an email at nsankrithi@healthtechinnovators.ai.</p>
                </div>
              )}
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-[#0d9e85] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#25313f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
