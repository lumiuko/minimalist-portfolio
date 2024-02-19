const socialLinks = [
  {
    name: 'GitHub',
    url: '#'
  },
  {
    name: 'Twitter',
    url: '#'
  },
  {
    name: 'LinkedIn',
    url: '#'
  }
]

export default function SocialLinks({ light = false }) {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(socialLink => (
        <a key={socialLink.name} href={socialLink.url} aria-label={socialLink.name}>
          <img
            src={`/icons/${socialLink.name.toLowerCase()}${light ? '-light' : ''}.svg`}
            alt={`${socialLink.name} logo`}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  )
}
