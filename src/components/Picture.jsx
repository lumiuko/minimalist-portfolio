export default function Picture({ type, name }) {
  return (
    <picture>
      <source srcSet={`/${type}/desktop/${name}@2x.jpg 2x`} media="(min-width: 1110px)" />
      <source srcSet={`/${type}/desktop/${name}.jpg`} media="(min-width: 1110px)" />
      <source srcSet={`/${type}/tablet/${name}@2x.jpg 2x`} media="(min-width: 768px)" />
      <source srcSet={`/${type}/tablet/${name}.jpg`} media="(min-width: 768px)" />
      <source srcSet={`/${type}/mobile/${name}@2x.jpg 2x`} />
      <img src={`/${type}/mobile/${name}.jpg`} alt={name} className="w-full" />
    </picture>
  )
}
