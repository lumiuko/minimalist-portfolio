import { useRef } from 'react'
import ContactBanner from '../components/ContactBanner'
import LinkButton from '../components/LinkButton'
import Picture from '../components/Picture'

export default function Homepage() {
  const aboutRef = useRef(null)

  function goToAbout() {
    if (!aboutRef) return
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="mt-10 relative flex flex-col gap-6 md:mt-12 xl:mt-[3.375rem]">
        <Picture type="homepage" name="image-homepage-hero" />
        <div className="flex flex-col gap-8 items-start md:absolute md:bg-very-light-gray md:left-0 md:bottom-0 md:max-w-[514px] md:pt-14 md:pr-14 md:gap-12 xl:gap-[3.375rem] xl:max-w-[445px]">
          <h1 className="font-heading font-bold text-h2 leading-h2 tracking-h2 xl:text-h1 xl:leading-h1 xl:tracking-h1">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <button className="flex bg-dark-blue text-white min-w-[200px] hover:bg-cyan group transition-colors" onClick={goToAbout}>
            <div className="self-stretch flex items-center px-4 bg-[#1d3445] group-hover:bg-[#56a292] transition-colors">
              <img src="/icons/down-arrows.svg" alt="Arrows icon" aria-hidden="true" className="group-hover:hidden" />
              <img
                src="/icons/down-arrows-light.svg"
                alt="Arrows light icon"
                aria-hidden="true"
                className="hidden w-[16px] group-hover:block"
              />
            </div>
            <div className="flex-1 py-4 text-center text-xs leading-4 uppercase tracking-[2px]">About me</div>
          </button>
        </div>
      </header>

      <section
        className="mt-24 mb-[7.125rem] flex flex-col gap-8 md:flex-row md:gap-[4.375rem] md:mb-24 xl:my-[9.375rem] xl:gap-[7.75rem]"
        ref={aboutRef}
      >
        <Picture type="homepage" name="image-homepage-profile" />
        <div className="border-y-[1px] border-t-line pt-8 pb-[3.25rem] md:pt-[3.125rem] md:pb-[2.875rem] xl:max-w-[350px]">
          <h2 className="font-heading font-bold text-h2 leading-h2 tracking-h2">About Me</h2>
          <p className="mt-7 mb-6">
            I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools
            are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding,
            you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out
            my work.
          </p>
          <LinkButton to="portfolio" text="Go to portfolio" />
        </div>
      </section>

      <ContactBanner />
    </>
  )
}
