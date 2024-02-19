import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="mt-20 bg-grayish-blue text-white px-6 py-14 md:mt-24 md:px-10 md:py-6 xl:mt-[9.375rem]">
      <div className="max-w-container mx-auto flex flex-col gap-10 justify-between items-center md:flex-row md:gap-12">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
          <img src="/logo-light.svg" alt="Logo" />
          <NavLinks />
        </div>
        <SocialLinks light />
      </div>
    </footer>
  )
}
