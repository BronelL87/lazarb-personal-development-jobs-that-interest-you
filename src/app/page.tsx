import JobCardComponent from "@/components/JobCardComponent";
import jobsData from "@/utils/jobsData.json"

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 py-8 space-y-8 bg-gray-800">
      <div>
        <h1 className='text-5xl text-white'>Jobs That Interest Me</h1>
      </div>
      {jobsData.map((job) => (
        <JobCardComponent
          key={job.id}
          id={job.id}
          company={job.company}
          website={job.website}
          jobLink={job.jobLink}
          description={job.description}
          whyIWantToWorkThere={job.whyIWantToWorkThere}
          currentStackFit={job.currentStackFit}
          newSkillsNeeded={job.newSkillsNeeded}
          goals={job.goals}
          skillsIFit={job.skillsIFit}
          image={job.image}
        />
      ))}
    </div>
  );
}
