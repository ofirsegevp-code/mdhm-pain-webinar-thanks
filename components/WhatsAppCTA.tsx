'use client'

import { motion } from 'framer-motion'

const WEBINAR_GROUP_URL = 'https://chat.whatsapp.com/HUmhKWXfkLt7ioUrlJ1Pxx'

const WhatsAppIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
)

export default function WhatsAppCTA() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'Lead', { content_name: 'webinar_whatsapp_group_join' })
    }
  }

  return (
    <section className="bg-bgAlt py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-cta/10 text-cta px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            צעד הכרחי לפני ההדרכה
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-4 leading-tight">
            הצטרפו לקבוצת המשתתפים בהדרכה
          </h2>

          <p className="text-lg md:text-xl text-textSoft mb-8 leading-relaxed">
            פתחנו קבוצת וואטסאפ ייעודית רק למשתתפי ההדרכה.
            <br />
            זה המקום שבו תקבלו את כל מה שצריך כדי להגיע מוכנים:
          </p>

          <ul className="text-right max-w-xl mx-auto space-y-3 mb-10">
            {[
              'תזכורת בבוקר ההדרכה',
              'לינק הזום נשלח שעה לפני המפגש',
              'שאלות חימום וטיזרים על תוכן ההדרכה',
              'מקום לשאול שאלות לפני, ובמהלך ההדרכה',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-textMain">
                <span className="text-whatsapp text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <motion.a
            href={WEBINAR_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsappDark text-white text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-5 rounded-full shadow-lg transition-colors duration-200"
          >
            <WhatsAppIcon />
            לקבוצת ההדרכה בוואטסאפ
          </motion.a>

          <p className="text-sm text-textSoft mt-6">
            ⚠️ הלינק לזום יישלח רק לחברי הקבוצה. אל תשכחו להצטרף.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const COMMUNITY_URL = 'https://chat.whatsapp.com/I0wVH8jWr6C8uuK4Wt0wYw'

export function CommunityCTA() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'Lead', { content_name: 'mdhm_community_join' })
    }
  }

  return (
    <section className="py-12 md:py-16 px-6 bg-bg">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-accent/30 rounded-2xl p-6 md:p-8 bg-accentLight/30 text-center"
        >
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            לטווח ארוך
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-textMain mb-3">
            רוצים להישאר איתנו גם אחרי ההדרכה?
          </h3>
          <p className="text-textSoft mb-5 leading-relaxed">
            לקהילת MDHM הכללית מצטרפים אנשים שמתעניינים בגישה רב-ממדית לבריאות.
            תוכן שוטף על מערכת העצבים, וויסות, ומה שעושים בקליניקה.
          </p>
          <motion.a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-cta text-cta hover:bg-cta hover:text-white text-base font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            <WhatsAppIcon />
            לקהילת MDHM הכללית
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
