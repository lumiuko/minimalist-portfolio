import LinkButton from './LinkButton'

export default function ContactBanner() {
  return (
    <section className="flex flex-col items-center gap-10 md:flex-row md:gap-8">
      <h2 className="font-heading font-bold text-h2 leading-h2 tracking-h2 text-center md:text-left md:max-w-[350px]">
        Interested in doing a project together?
      </h2>
      <hr className="hidden md:block flex-1 border-line"></hr>
      <LinkButton to="/contact" text="Contact me" />
    </section>
  )
}
