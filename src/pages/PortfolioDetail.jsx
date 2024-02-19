import { useParams } from 'react-router-dom'
import ContactBanner from '../components/ContactBanner'
import LinkButton from '../components/LinkButton'
import Picture from '../components/Picture'

import data from '../data.json'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function PortfolioDetail() {
  const { slug } = useParams()

  const currentProjectIndex = data.findIndex(project => project.slug === slug)
  const currentProject = data[currentProjectIndex]
  const previousProject = data[currentProjectIndex - 1]
  const nextProject = data[currentProjectIndex + 1]

  if (!currentProject) {
    return <Navigate to="/portfolio" />
  }

  return (
    <>
      <div className="mt-10 mb-16 md:mt-24 md:mb-20 xl:mb-[7.125rem]">
        <Picture type="detail" name={currentProject.images.hero} />

        <div className="mt-10 text-body-2 leading-body-2 flex flex-col gap-12 md:gap-10 md:mt-[7.25rem] xl:flex-row xl:items-start xl:justify-between">
          <aside className="py-6 border-y-[1px] border-y-line flex gap-3 items-start md:py-8 xl:max-w-[350px] xl:py-12">
            <div className="flex-1 items-start md:gap-4">
              <h1 className="font-heading font-bold text-h2 leading-h2 tracking-h2">{currentProject.name}</h1>
              <p className="mt-6 md:hidden xl:block xl:mt-7">{currentProject.description}</p>
              <div className="my-6 text-cyan font-bold text-[0.8125rem] flex flex-col md:my-4 xl:mt-6 xl:mb-8 xl:gap-4 xl:text-body-1">
                <p>{currentProject.tags.join(' / ')}</p>
                <p>{currentProject.languages.join(' / ')}</p>
              </div>
              <LinkButton to={currentProject.website} isNative text="Visit website" />
            </div>
            <p className="flex-1 hidden md:block xl:hidden">{currentProject.description}</p>
          </aside>

          <div className="flex flex-col gap-10 xl:max-w-[635px]">
            <section>
              <h2 className="font-heading text-h3 leading-h2 tracking-h3">Project Background</h2>
              <p className="mt-7">{currentProject.projectBackground}</p>
            </section>
            <section>
              <h2 className="font-heading text-h3 leading-h2 tracking-h3">Static Previews</h2>
              <div className="mt-10 flex flex-col gap-8 xl:mt-7">
                {currentProject.images.preview.map((previewImage, index) => (
                  <Picture key={index} type="detail" name={previewImage} />
                ))}
              </div>
            </section>
          </div>
        </div>

        <div
          className="mt-16 flex justify-between items-center py-6 border-y-[1px] border-y-line relative before:absolute before:h-full before:w-[1px] before:bg-line before:top-0 before:left-1/2 md:mt-20 md:py-8 xl:mt-16"
          style={{ justifyContent: !previousProject ? 'end' : '' }}
        >
          {previousProject && (
            <Link
              to={`/portfolio/${previousProject.slug}`}
              className="flex flex-col items-start gap-4 md:flex-row md:gap-8 md:items-center"
            >
              <img src="/icons/arrow-left.svg" alt="Arrow left" aria-hidden="true" />
              <div className="text-left">
                <p className="font-heading text-h3 leading-h3 tracking-h3">{previousProject.name}</p>
                <p className="opacity-50">Previous Project</p>
              </div>
            </Link>
          )}
          {nextProject && (
            <Link to={`/portfolio/${nextProject.slug}`} className="flex flex-col items-end gap-4 md:flex-row md:gap-8 md:items-center">
              <img src="/icons/arrow-right.svg" alt="Arrow right" aria-hidden="true" className="md:order-1" />
              <div className="text-right">
                <p className="font-heading text-h3 leading-h3 tracking-h3">{nextProject.name}</p>
                <p className="opacity-50">Next Project</p>
              </div>
            </Link>
          )}
        </div>
      </div>

      <ContactBanner />
    </>
  )
}
