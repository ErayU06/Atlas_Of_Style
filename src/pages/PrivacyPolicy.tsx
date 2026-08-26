import { Link } from 'react-router'
import { ChevronLeft } from 'lucide-react'
import { useApp } from '@/context/AppContext'
import { t } from '@/i18n'

const sections: { title: string; body: string[] }[] = [
  {
    title: 'Topladığımız veriler',
    body: [
      'Hesap oluşturduğunuzda: kullanıcı adı, e-posta adresi, isteğe bağlı ad, cinsiyet ve şifrenizin geri döndürülemez şekilde şifrelenmiş (hash\'lenmiş) hâli.',
      'Uygulama kullanımınız sırasında: favori ülkeleriniz ve seyahat notlarınız.',
      'Şifreniz hiçbir zaman düz metin olarak saklanmaz; yalnızca tek yönlü bir şifreleme algoritmasıyla (scrypt) üretilmiş hash\'i tutulur.',
    ],
  },
  {
    title: 'Verileri nasıl kullanıyoruz',
    body: [
      'Toplanan veriler yalnızca hesabınızı çalıştırmak (giriş yapabilmeniz, favori ve notlarınızın cihazlar arasında senkronize olması) için kullanılır.',
      'Verileriniz reklam, pazarlama veya profil oluşturma amacıyla işlenmez.',
    ],
  },
  {
    title: 'Verilerin paylaşımı',
    body: [
      'Verileriniz hiçbir üçüncü tarafla satılmaz, kiralanmaz veya paylaşılmaz.',
      'Veriler yalnızca uygulamanın kendi veritabanında saklanır; hiçbir reklam ağı, analitik servisi veya harici SDK ile paylaşılmaz.',
    ],
  },
  {
    title: 'Verilerinizi silme',
    body: [
      'Profil sayfanızdan "Hesabı Sil" seçeneğiyle hesabınızı ve hesabınıza bağlı tüm verileri (favoriler, notlar) kalıcı ve geri döndürülemez şekilde silebilirsiniz.',
      'Hesap silme işlemi anında uygulanır; verileriniz sunucularımızdan tamamen kaldırılır.',
    ],
  },
  {
    title: 'İletişim',
    body: [
      'Gizlilikle ilgili sorularınız için uygulama içindeki iletişim kanallarını kullanabilirsiniz.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  const { lang } = useApp()

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-6">
      <Link
        to="/profile"
        className="inline-flex w-fit items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm"
      >
        <ChevronLeft size={16} />
        {t('back', lang)}
      </Link>

      <h1 className="mt-6 font-serif text-3xl font-semibold text-stone-900">
        Gizlilik Politikası
      </h1>
      <p className="mt-1.5 text-sm text-stone-500">Atlas of Style · Son güncelleme: Ağustos 2026</p>

      <div className="mt-6 space-y-6">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-serif text-lg font-semibold text-stone-900">{s.title}</h2>
            <div className="mt-2 space-y-2">
              {s.body.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-stone-600">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
