import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon, SparklesIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana, inter } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
          <div className="w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        {/* Navigation Header */}
        <header className="relative z-10 px-6 pt-6 pb-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
                <AcmeLogo />
              </div>
            </div>
            <Link
              href="/login"
              className="flex items-center gap-2 px-6 py-2.5 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-slate-700 hover:text-slate-900 rounded-full border border-white/20 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <span className="font-medium">Sign In</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 px-6 pt-16 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    <SparklesIcon className="w-4 h-4" />
                    Modern Dashboard Experience
                  </div>
                  
                  <h1 className={`${lusitana.className} text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight`}>
                    Welcome to{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Acme
                    </span>
                  </h1>
                  
                  <p className={`${inter.className} text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl`}>
                    Experience the future of business management with our intuitive dashboard. 
                    Built with modern technologies for{' '}
                    <span className="text-blue-600 font-medium">seamless productivity</span>.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/login"
                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <span>Get Started</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  
                  <a
                    href="https://nextjs.org/learn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 rounded-2xl font-semibold text-lg border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>Learn More</span>
                  </a>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-white/20">
                    <ChartBarIcon className="w-4 h-4 text-green-600" />
                    Analytics
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-white/20">
                    <ShieldCheckIcon className="w-4 h-4 text-blue-600" />
                    Secure
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-white/20">
                    <SparklesIcon className="w-4 h-4 text-purple-600" />
                    Modern UI
                  </div>
                </div>
              </div>

              {/* Right Content - Images */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="hidden md:block relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
                      <Image
                        src="/hero-desktop.png"
                        width={1000}
                        height={760}
                        className="rounded-2xl"
                        alt="Screenshots of the dashboard project showing the desktop version"
                        priority
                      />
                    </div>
                  </div>
                  
                  <div className="block md:hidden relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
                      <Image 
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        className="rounded-2xl"
                        alt="Mobile version of the dashboard"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
