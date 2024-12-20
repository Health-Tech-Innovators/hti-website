'use client'
import { useState, useRef, useEffect } from 'react'
import { Container } from "@/components/container"
import { Heading, Subheading } from "@/components/text2"

function Card({ person, isExpanded, onExpand }) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      cardRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }, [isExpanded])

  return (
    <div 
      ref={cardRef}
      className={`relative flex flex-col justify-end overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 ease-in-out
        ${isExpanded 
          ? 'w-[800px] h-[800px]' 
          : 'w-[280px] sm:w-[300px] h-[380px] sm:h-[400px] hover:scale-105'
        }
        ${isExpanded ? 'basis-full' : ''}`}
      onClick={() => onExpand(person.name)}
    >
      <img
        alt={person.name}
        src={person.imageUrl}
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#25313f] from-5% to-45% ring-1 ring-inset ring-gray-950/10 lg:from-25%"
      />
      
      {!isExpanded ? (
        <figure className="relative p-10">
          <figcaption className="mt-6 border-t border-white/20 pt-6">
            <p className="text-sm/6 font-medium text-[#f0f4f7]">{person.name}</p>
            <p className="text-sm/6 font-medium">
              <span className="bg-[#0d9e85] bg-clip-text text-transparent">
                {person.role}
              </span>
            </p>
          </figcaption>
        </figure>
      ) : (
        <div className="relative p-6 bg-white/95 dark:bg-zinc-900/95 rounded-3xl m-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-[#0d9e85]">{person.name}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{person.role}</p>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation()
                onExpand(null)
              }}
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full"
            >
              ✕
            </button>
          </div>
          <div className="flex gap-6">
            <div className="space-y-4 flex-1">
              <p className="text-zinc-700 dark:text-zinc-300 text-sm whitespace-pre-line">{person.bio}</p>
              {person.linkedinUrl && (
                <a 
                  href={person.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0d9e85] hover:text-[#25313f]"
                  onClick={(e) => e.stopPropagation()}
                >
                  View LinkedIn Profile
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const people = [
    {
      name: 'Nagarajan Sankrithi',
      role: 'Founder / CEO',
      imageUrl: '/team/naga.jpg',
      bio: `Nagarajan S. Sankrithi is a healthcare strategist/ consultant for Healthcare Integrative Solutions, LLC. He brings his extensive expertise in public health, pharmaceutical informatics to the healthcare space. For the past 17 years, he has built and delivered appropriate informatics solutions to transform research operations for early drug-discovery to pre-clinical research for Abbott/AbbVie, Merck and Massachusetts Public health Laboratory. His informatics career blossomed while he was working as an assay development scientist for a central nervous system (CNS) drug discovery start-up pharmaceutical company EnVivo (Forum). He built the informatics solutions that was instrumental in automating a high throughput behavioral assay data platform and established a cheminformatics data science backbone. He used it to select the clinical candidate for Alzheimer's/ Schizophrenia (EVP-6124/Encenicline).
            
            Nagarajan is currently consulting at AstraZeneca where he is helping the Antibody and Protein Engineering Group to develop an informatics solution for the proteomics, metabolomics and lipidomics lab. While pursuing the pharmaceutical research consulting, he is co-implementing a full-service Transitional Care Program.
            
            Nagarajan Sankrithi holds a Bachelor's in Biology and Chemistry from University of Wisconsin- Superior, a Master's in Biochemistry from University of Houston, a PhD in Neurobiology from Northeastern University and a Master's in Healthcare Administration from Cornell University. His Capstone thesis for this program focused on a comparative analysis of operational efficiencies of an independent homecare agency (HNTS) and a large hospital-based homecare and hospice business (EverGreenHealth). He is currently developing clinical dashboards that will assist homecare agencies with operational efficiencies, revenue cycle management improving overall financial health.`,
      linkedinUrl: 'https://www.linkedin.com/in/nagarajansankrithi/',
    },
    {
      name: 'Aanika Rahman',
      role: 'Solutions Architect',
      imageUrl: '/team/aanika.jpg',
      bio: `Aanika serves as the Solutions Developer at HealthTech Innovators, seamlessly undertaking the roles of a solutions architect, data engineer, and tech lead.
  
            In her multifaceted role, Aanika leverages the broad experience she acquired from various startups and previous collaborations with clients in the financial, technology, health, and energy sectors. She established the groundwork for her career by earning a Bachelor of Science in Mathematics and Computer Science from McGill University. Her technical expertise now spans data analytics, data visualization, fullstack development, and machine learning.
  
            Dedicated to fostering learning and community engagement, Aanika co-chaired the Canadian University Software Engineering Conference, attracting 500+ students nationwide. She also participated in and coordinated the AI4Good Lab, demonstrating her commitment to leveraging technology for social good. Beyond the tech realm, Aanika has also made meaningful impact by working closely with children with disabilities in Bermuda and Montreal.
  
            Fueled by a passion for both technology and community, Aanika stands as a driving force in Healthcare Integrative Solutions. Embracing challenges with a strategic mindset, Aanika continues to strive for innovative software solutions that redefine the future of healthcare.`,
      linkedinUrl: 'https://www.linkedin.com/in/aanikarahman/',
    },
    {
      name: 'Maharshee Karia',
      role: 'Lead Solutions Developer',
      imageUrl: '/images/team/maharshee.jpg',
      bio: '',
      linkedinUrl: 'https://www.linkedin.com/in/maharshee-karia/',
    },
  ]

export function TeamContent() {
  const [expandedPerson, setExpandedPerson] = useState(null)

  return (
    <div className="flex flex-col items-center gap-16">
      <Container>
        <div>
          <Subheading>A dynamic group of individuals passionate about what we do and dedicated to delivering the best results</Subheading>
          <Heading as="h3" className="mt-2">
            About the team
          </Heading>
        </div>
      </Container>

      <div className="flex flex-wrap items-start justify-center gap-6 px-4">
        {people.map((person) => (
          <Card 
            key={person.name} 
            person={person}
            isExpanded={expandedPerson === person.name}
            onExpand={(name) => setExpandedPerson(name === expandedPerson ? null : name)}
          />
        ))}
      </div>
    </div>
  )
}