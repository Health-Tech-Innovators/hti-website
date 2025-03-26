'use client'
import { useState, useRef, useEffect } from 'react'
import { Container } from "@/components/container"

function Card({ person, isExpanded, onExpand }) {
  const cardRef = useRef(null)

  return (
    <div 
      ref={cardRef}
      className="relative flex flex-col justify-end overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 ease-in-out w-[280px] sm:w-[300px] h-[380px] sm:h-[400px] hover:scale-105"
      onClick={() => onExpand(person.name)}
    >
      <img
        alt={person.name}
        src={person.imageUrl}
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#25313f] from-5% to-45% ring-2 ring-inset ring-gray-950/10 lg:from-25%"
      />
      
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
    </div>
  )
}

const people = [
    {
      name: 'Nagarajan Sankrithi',
      role: 'Founder / CEO',
      imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/team/naga.jpg`,
      bio: `Nagarajan S. Sankrithi is a healthcare strategist and consultant for HealthTech Innovators. He brings his extensive expertise in public health, pharmaceutical informatics to the healthcare space. For the past 17 years, he has built and delivered appropriate informatics solutions to transform research operations for early drug-discovery to pre-clinical research for Abbott/AbbVie, Merck and Massachusetts Public health Laboratory. His informatics career blossomed while he was working as an assay development scientist for a central nervous system (CNS) drug discovery start-up pharmaceutical company EnVivo (Forum). He built the informatics solutions that was instrumental in automating a high throughput behavioral assay data platform and established a cheminformatics data science backbone. He used it to select the clinical candidate for Alzheimer's/ Schizophrenia (EVP-6124/Encenicline).
            
            Nagarajan is currently consulting at AstraZeneca where he is helping the Antibody and Protein Engineering Group to develop an informatics solution for the proteomics, metabolomics and lipidomics lab. While pursuing the pharmaceutical research consulting, he is co-implementing a full-service Transitional Care Program.
            
            Nagarajan Sankrithi holds a Bachelor's in Biology and Chemistry from University of Wisconsin- Superior, a Master's in Biochemistry from University of Houston, a PhD in Neurobiology from Northeastern University and a Master's in Healthcare Administration from Cornell University. His Capstone thesis for this program focused on a comparative analysis of operational efficiencies of an independent homecare agency (HNTS) and a large hospital-based homecare and hospice business (EverGreenHealth). He is currently developing clinical dashboards that will assist homecare agencies with operational efficiencies, revenue cycle management improving overall financial health.`,
      linkedinUrl: 'https://www.linkedin.com/in/nagarajansankrithi/',
    },
    {
      name: 'Aanika Rahman',
      role: 'Solutions Architect',
      imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/team/aanika.jpg`,
      bio: `Aanika serves as the Solutions Architect at HealthTech Innovators, seamlessly undertaking the roles of a solutions developer, data engineer, and tech lead.
  
            In her multifaceted role, Aanika leverages the broad experience she acquired from various startups and previous collaborations with clients in the financial, technology, health, and energy sectors. She established the groundwork for her career by earning a Bachelor of Science in Mathematics and Computer Science from McGill University. Her technical expertise now spans data analytics, data visualization, fullstack development, and machine learning.
  
            Dedicated to fostering learning and community engagement, Aanika co-chaired the Canadian University Software Engineering Conference, attracting 500+ students nationwide. She also participated in and coordinated the AI4Good Lab, demonstrating her commitment to leveraging technology for social good. Beyond the tech realm, Aanika has also made meaningful impact by working closely with children with disabilities in Bermuda and Montreal.
  
            Fueled by a passion for both technology and community, Aanika stands as a driving force in HealthTech Innovators. Embracing challenges with a strategic mindset, Aanika continues to strive for innovative software solutions that redefine the future of healthcare.`,
      linkedinUrl: 'https://www.linkedin.com/in/aanikarahman/',
    },
    {
      name: 'Maharshee Karia',
      role: 'Lead Solutions Developer',
      imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/team/maharshee.jpg`,
      bio: `Maharshee began her career as a Big Data Developer, honing her skills in managing and analyzing large datasets to derive actionable insights. This early experience, combined with her strong foundation in mathematics, earned through her Bachelor of Science degree from McGill University, laid the groundwork for her ability to tackle complex technical challenges.

            Now a Lead Solutions Developer at HealthTech Innovators, she excels in designing and implementing innovative solutions. Her analytical mindset and passion for problem-solving enable her to bridge the gap between technical complexity and user-friendly design. She is currently focused on expanding her expertise in full-stack development, seamlessly combining her interest in UI/UX design with technical proficiency to craft applications that are not only functional but also intuitive and visually appealing.

            Outside of her professional pursuits, Maharshee channels her creativity into activities like dance, where she finds inspiration and balance. Her dedication to continuous growth, both technically and creatively, defines her approach to work and life.`,
      linkedinUrl: 'https://www.linkedin.com/in/maharshee-karia/',
    },
  ]

export function TeamContent() {
  const [expandedPerson, setExpandedPerson] = useState(null)
  const expandedContentRef = useRef(null)

  const handleExpand = (name) => {
    setExpandedPerson(name === expandedPerson ? null : name)
    
    if (name && name !== expandedPerson) {
      setTimeout(() => {
        expandedContentRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 100)
    }
  }

  return (
    <div className="overflow-hidden bg-gray py-10 sm:py-10">
      <div className="flex flex-col items-center gap-16">
        <Container>
          <div>
            {/* <h3 className="text-pretty text-base tracking-tight text-[#25313f] sm:text-2xl mb-4">   
                A dynamic group of individuals passionate about what we do and dedicated to delivering the best results
            </h3> */}
            <h2 className="text-pretty text-6xl tracking-tight text-[#0d9e85] sm:text-5xl mt-10">
                About the team
            </h2>
          </div>
        </Container>

        <div className="flex flex-wrap items-start justify-center gap-6 px-4 content-start">
          {people.map((person) => (
            <Card 
              key={person.name} 
              person={person}
              isExpanded={expandedPerson === person.name}
              onExpand={handleExpand}
            />
          ))}
          
          {/* Expanded Content */}
          {expandedPerson && (
            <div ref={expandedContentRef} className="w-full max-w-5xl mt-6 animate-fade-slide-up">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden">
                <div className="gap-6 p-6">
                  <div className="flex flex-col">
                    <div className="pb-4">
                      <button 
                        onClick={() => setExpandedPerson(null)}
                        className="float-right p-2 hover:bg-zinc-100 rounded-full"
                      >
                        ✕
                      </button>
                      <h3 className="text-3xl font-bold text-[#0d9e85] mb-1">
                        {people.find(p => p.name === expandedPerson).name}
                      </h3>
                      <p className="text-lg text-zinc-600 font-medium">
                        {people.find(p => p.name === expandedPerson).role}
                      </p>
                    </div>
                    
                    <div className="prose prose-zinc prose-lg max-w-none">
                      <p className="whitespace-pre-line leading-relaxed">
                        {people.find(p => p.name === expandedPerson).bio}
                      </p>
                    </div>

                    <div className="mt-6">
                    {people.find(p => p.name === expandedPerson).linkedinUrl && (
                      <a 
                        href={people.find(p => p.name === expandedPerson).linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow text-[#0d9e85] hover:text-[#25313f] transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span>Connect on LinkedIn</span>
                      </a>
                    )}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}