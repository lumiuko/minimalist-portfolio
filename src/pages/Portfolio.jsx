import ContactBanner from '../components/ContactBanner'
import PortfolioItem from '../components/PortfolioItem'
import data from '../data.json'

export default function Portfolio() {
  return (
    <>
      <section className="mt-10 mb-20 flex flex-col gap-[4.5rem] md:my-24 md:gap-20 xl:mb-[9.375rem]">
        <h1 className="sr-only">My portfolio</h1>
        {data.map(project => (
          <PortfolioItem key={project.id} item={project} />
        ))}
      </section>

      <ContactBanner />
    </>
  )
}
