import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_1a728mk'
const TEMPLATE_ID = 'template_228blwb'
const PUBLIC_KEY = 'ZksIyjdnGFrAcf_LT'

export function sendBetaSignupEmail(userEmail, source) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      user_email: userEmail,
      signup_source: source,
      signup_time: new Date().toLocaleString(),
    },
    PUBLIC_KEY,
  )
}
