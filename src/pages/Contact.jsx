import { useId } from 'react'
import { useForm } from 'react-hook-form'
import SocialLinks from '../components/SocialLinks'

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default function Contact() {
  const id = useId()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  function onSubmit() {
    reset()
  }

  return (
    <>
      <section className="mt-10 border-y-[1px] border-y-line pt-6 pb-8 flex flex-col justify-between gap-6 md:mt-24 md:py-8 xl:py-12 xl:flex-row">
        <h1 className="font-heading font-bold text-h2 leading-h2 tracking-h2 w-full xl:max-w-[350px]">Get in Touch</h1>
        <div className="flex flex-col gap-6 xl:max-w-[635px]">
          <p className="text-body-2 leading-body-2 xl:text-body-1 xl:leading-body-1">
            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide
            range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about
            opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a
            sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the
            form.
          </p>
          <SocialLinks />
        </div>
      </section>

      <section className="flex flex-col justify-between gap-6 mt-8 md:gap-8 xl:mt-12 xl:flex-row">
        <h2 className="font-heading font-bold text-h2 leading-h2 tracking-h2 w-full xl:max-w-[350px]">Contact Me</h2>
        <form className="w-full flex flex-col gap-6 text-[0.8125rem] xl:max-w-[635px]" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor={id + 'name'} className="font-bold">
              Name
            </label>
            <input
              {...register('name', { required: true })}
              placeholder="Jane Appleseed"
              className="bg-input px-4 py-2 leading-8 outline-cyan"
              id={id + 'name'}
              style={{ outlineColor: errors.name ? '#F43030' : '' }}
            />
            {errors.name && <p className="text-bright-red font-bold italic text-[0.625rem] leading-3 xl:text-xs">This field is required</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={id + 'email'} className="font-bold">
              Email Address
            </label>
            <input
              {...register('email', { required: true, pattern: emailPattern })}
              placeholder="email@example.com"
              className="bg-input px-4 py-2 leading-8 outline-cyan"
              id={id + 'email'}
              style={{ outlineColor: errors.email ? '#F43030' : '' }}
            />
            {errors.email && (
              <p className="text-bright-red font-bold italic text-[0.625rem] leading-3 xl:text-xs">This field is required</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={id + 'message'} className="font-bold">
              Message
            </label>
            <textarea
              {...register('message', { required: true })}
              placeholder="How can I help?"
              className="bg-input px-4 py-2 leading-8 min-h-24 outline-cyan"
              id={id + 'message'}
              style={{ outlineColor: errors.message ? '#F43030' : '' }}
            />
            {errors.message && (
              <p className="text-bright-red font-bold italic text-[0.625rem] leading-3 xl:text-xs">This field is required</p>
            )}
          </div>
          <button className="uppercase self-start bg-dark-blue text-white px-6 py-4 text-xs leading-4 tracking-[2px] hover:bg-cyan transition-colors focus-visible:outline-cyan">
            Send message
          </button>
        </form>
      </section>
    </>
  )
}
