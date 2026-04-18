import emailjs from '@emailjs/browser'

function getEmailJsConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'Email service is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.',
    )
  }

  return { serviceId, templateId, publicKey }
}

type EmailJsErrorLike = {
  status?: number
  text?: string
  message?: string
}

function toErrorMessage(err: unknown) {
  if (typeof err === 'string' && err.trim()) return err.trim()

  if (err instanceof Error && err.message) return err.message

  if (err && typeof err === 'object') {
    const e = err as EmailJsErrorLike
    if (typeof e.text === 'string' && e.text.trim()) {
      return typeof e.status === 'number' ? `${e.text.trim()} (status ${e.status})` : e.text.trim()
    }
    if (typeof e.message === 'string' && e.message.trim()) return e.message.trim()
  }

  return 'Could not send message. Please try again.'
}

export async function sendEmailJsForm(formEl: HTMLFormElement) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig()
  try {
    return await emailjs.sendForm(serviceId, templateId, formEl, { publicKey })
  } catch (err) {
    throw new Error(toErrorMessage(err))
  }
}

