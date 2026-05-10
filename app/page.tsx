'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import SocialIcons from '@/components/SocialIcons'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const firstName = searchParams.get('name') || searchParams.get('firstname') || ''

  const greetingPrefix = firstName ? `${firstName}, ההרשמה שלך אושרה להדרכה:` : 'ההרשמה שלך אושרה להדרכה:'
  const webinarTitle = 'למה הכאב לא חולף, גם אחרי שניסית הכל?'

  return (
    <main>
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-accentLight to-bg pt-16 md:pt-24 pb-16 md:pb-20 px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
            className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-forest text-white rounded-full mb-6 shadow-lg"
          >
            <svg
              className="w-10 h-10 md:w-12 md:h-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-textSoft mb-3 font-medium"
          >
            {greetingPrefix}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-textMain mb-6 leading-tight"
          >
            {webinarTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-lg md:text-xl text-textSoft mb-8 leading-relaxed"
          >
            שמרנו לך מקום.
            <br className="hidden md:block" />
            הלינק לכניסה לזום יישלח אליך בוואטסאפ סמוך למועד.
          </motion.p>

          {/* Event details card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white border-2 border-accent/30 rounded-2xl shadow-md p-6 md:p-8 max-w-lg mx-auto"
          >
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              פרטי ההדרכה
            </div>
            <div className="space-y-2 text-right">
              <div className="flex items-center justify-between border-b border-bgAlt pb-2">
                <span className="text-textSoft">תאריך</span>
                <span className="font-bold text-textMain">יום שלישי, 26.5.2026</span>
              </div>
              <div className="flex items-center justify-between border-b border-bgAlt pb-2">
                <span className="text-textSoft">שעה</span>
                <span className="font-bold text-textMain">20:00</span>
              </div>
              <div className="flex items-center justify-between border-b border-bgAlt pb-2">
                <span className="text-textSoft">משך</span>
                <span className="font-bold text-textMain">שעה ורבע</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-textSoft">פלטפורמה</span>
                <span className="font-bold text-textMain">זום</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Community CTA */}
      <WhatsAppCTA />

      {/* What's next */}
      <section className="py-16 md:py-20 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-textMain text-center mb-12"
          >
            מה הלאה?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: '1',
                title: 'שמרי את התאריך',
                desc: '26.5.2026 בשעה 20:00. הוסיפי תזכורת ביומן כדי לא להחמיץ.',
                color: 'bg-accent',
              },
              {
                num: '2',
                title: 'הצטרפי לקהילה',
                desc: 'בקהילת הוואטסאפ תקבלי תזכורות, תכנים ועדכונים שוטפים.',
                color: 'bg-cta',
              },
              {
                num: '3',
                title: 'שתפי חברה',
                desc: 'אם את מכירה מישהי שכאב כרוני מפריע לה, הזמיני אותה להירשם.',
                color: 'bg-forest',
              },
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-bgAlt rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 ${step.color} text-white text-2xl font-bold rounded-full mb-4 shadow-md`}
                >
                  {step.num}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-textMain mb-3">
                  {step.title}
                </h3>
                <p className="text-textSoft leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <SocialIcons />

      {/* Footer */}
      <footer className="bg-textMain text-white py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-serif text-xl mb-2">אופיר שגב פרימן</div>
          <div className="text-sm text-white/70 mb-4">
            המרכז לאבחון וריפוי רב-ממדי בשיטת MDHM
          </div>
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} כל הזכויות שמורות
          </div>
        </div>
      </footer>
    </main>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-accentLight" />}>
      <ThankYouContent />
    </Suspense>
  )
}
