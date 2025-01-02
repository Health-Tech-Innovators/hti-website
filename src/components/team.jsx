'use client'
import { useState, useRef, useEffect } from 'react'
import { Container } from "@/components/container"

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
          ? 'w-full md:w-[800px] h-auto md:h-[800px] max-w-[95vw]' 
          : 'w-[280px] sm:w-[300px] h-[380px] sm:h-[400px] hover:scale-105'
        }
        ${isExpanded ? 'basis-full' : ''}`}
      onClick={() => onExpand(person.name)}
    >
      <img
        alt={person.name}
        src={person.imageUrl}
        className={`absolute inset-0 object-cover ${
          isExpanded ? 'w-full md:w-[300px] h-[250px] md:h-[400px] position-relative md:left-4 md:top-4 rounded-3xl' : ''
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#25313f] from-5% to-45% ring-2 ring-inset ring-gray-950/10 lg:from-25%"
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
        <div className="relative p-4 md:p-6 bg-white/95 rounded-3xl m-2 md:m-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-[#0d9e85]">{person.name}</h3>
              <p className="text-zinc-600">{person.role}</p>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation()
                onExpand(null)
              }}
              className="p-2 hover:bg-zinc-100 rounded-full"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="space-y-4 flex-1">
              <p className="text-zinc-700 text-sm whitespace-pre-line">{person.bio}</p>
              {person.linkedinUrl && (
                <a 
                  href={person.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0d9e85] hover:text-[#25313f]"
                  onClick={(e) => e.stopPropagation()}
                >
                  View LinkedIn Profile
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
    </div>
  )
}