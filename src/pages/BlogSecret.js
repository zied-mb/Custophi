import { Link } from "react-router-dom";
import { LockKeyhole, ShieldCheck, Key, ClipboardCheck, Zap, Gauge, Cpu, Fingerprint } from "lucide-react";

export default function BlogSecret() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-green-100 rounded-full opacity-20 blur-3xl" />
                    <div className="absolute bottom-0 -right-60 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-100 rounded-full opacity-20 blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl w-full px-4 sm:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                        {/* Left Content */}
                        <div className="flex-1 space-y-6 md:space-y-8">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <LockKeyhole className="text-green-600 w-8 h-8 sm:w-12 sm:h-12 animate-pulse" />
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                    Secret Key
                                </h1>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Generate Military-Grade Passwords <br className="hidden sm:block" />
                                <span className="text-green-600">in Milliseconds</span>
                            </h2>

                            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                                Fortify your digital security with our advanced password engine. Perfect for security-conscious
                                users who value privacy and impenetrable data protection.
                            </p>

                            <Link
                                to="/passwordgenerator"
                                className="inline-flex items-center group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 sm:px-8 sm:py-5 rounded-lg md:rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-sm sm:text-lg font-semibold"
                            >
                                <Key className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 transition-transform group-hover:rotate-45" />
                                Generate Secure Keys
                            </Link>
                        </div>

                        {/* Right Illustration */}
                        <div className="flex-1 relative mt-12 lg:mt-0 w-full max-w-xl lg:max-w-none mx-auto">
                            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/20">
                                <div className="space-y-4 md:space-y-6">
                                    <div className="bg-white p-4 sm:p-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Security Preview</h3>
                                        </div>
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono text-sm sm:text-base text-gray-700 tracking-wider">▮▮▮▮▮▮▮▮▮▮▮▮</span>
                                                <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 cursor-pointer" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-full bg-green-100 h-2 rounded-full">
                                                    <div className="w-4/5 bg-green-600 h-2 rounded-full"></div>
                                                </div>
                                                <span className="text-xs sm:text-sm font-semibold text-green-600">Extreme Strength</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                        <div className="bg-white p-3 sm:p-4 rounded-md sm:rounded-lg shadow-sm md:shadow-md border border-green-50">
                                            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mb-1 sm:mb-2" />
                                            <p className="text-xs sm:text-sm font-semibold text-gray-800">256-bit Encryption</p>
                                        </div>
                                        <div className="bg-white p-3 sm:p-4 rounded-md sm:rounded-lg shadow-sm md:shadow-md border border-green-50">
                                            <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mb-1 sm:mb-2" />
                                            <p className="text-xs sm:text-sm font-semibold text-gray-800">Zero Storage</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="relative py-16 md:py-20 bg-white/50 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                            Why Choose CryptoVault?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            The ultimate security toolkit for generating and managing uncrackable credentials
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Fingerprint,
                                title: "Biometric Security",
                                color: "green",
                                description: "Military-grade encryption combined with advanced hashing algorithms for maximum protection"
                            },
                            {
                                icon: Gauge,
                                title: "Real-Time Analysis",
                                color: "emerald",
                                description: "Instant strength assessment and vulnerability detection powered by AI"
                            },
                            {
                                icon: ClipboardCheck,
                                title: "Secure Storage",
                                color: "green",
                                description: "Optional encrypted vault with zero-knowledge architecture for password management"
                            },
                        ].map((feature, index) => (
                            <div key={index} className="bg-gradient-to-b from-white to-green-50 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-white/20">
                                <feature.icon className={`w-10 h-10 md:w-12 md:h-12 text-${feature.color}-600 mb-4 md:mb-6`} />
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{feature.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}