import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface JobCardProps {
    id: number;
    company: string;
    website: string;
    jobLink: string;
    description: string;
    whyIWantToWorkThere: string;
    currentStackFit: boolean;
    newSkillsNeeded: string[];
    goals: string;
    skillsIFit: string[];
    image: string;
  }

const JobCardComponent = ({id, company, website, jobLink, description, whyIWantToWorkThere, currentStackFit, newSkillsNeeded, goals, skillsIFit, image }: JobCardProps) => {
  return (
    <div id={`job-${id}`} className="w-[800px] px-4 py-8 space-y-6">
    <h2 className="text-3xl font-bold text-yellow-400">#{id} - {company}</h2>
    <div className="relative w-[800px] h-70 sm:h-80 md:h-100">
      <Image
        src={image}
        alt={`${company} logo`}
        fill
        className="object-cover rounded-xl"
      />
    </div>

    <div className="space-y-4 text-white">


      <p className="text-sm italic">{description}</p>

      <p>
        <span className="font-bold">Why I want to work there:</span> {whyIWantToWorkThere}
      </p>

      <p>
        <span className="font-bold">Stack Fit:</span> {currentStackFit ? 'Yes' : 'Not entirely'}
      </p>

      {newSkillsNeeded.length > 0 && (
        <p>
          <span className="font-bold">Skills I’d need to learn:</span> {newSkillsNeeded.join(', ')}
        </p>
      )}

      <p>
        <span className="font-bold">Goals in this position:</span> {goals}
      </p>

      <p>
        <span className="font-bold">Current skillset match:</span> {skillsIFit.join(', ')}
      </p>

      <div className="pt-2 space-x-4">
        <Link
          href={website}
          className="text-sm font-semibold text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Company Website
        </Link>
        <Link
          href={jobLink}
          className="text-sm font-semibold text-green-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Job Listing
        </Link>
      </div>
    </div>
  </div>
  )
}

export default JobCardComponent
