import { Link } from "react-router-dom";
import {
  Sparkles, LockKeyhole, Shield, Crown, Gem, Zap, Cpu, Users, BadgeCheck,
  Globe, Clock, Key, Fingerprint, Code, Server, ShieldHalf, Network, BarChart,
  Cloud, Smartphone, Database, Hash, Terminal, ShieldCheck, RotateCw, BookOpen,
  Star, ArrowRight, Circle, ChevronRight
} from "lucide-react";

export default function Home() {
  const tools = [
    {
      title: "Bio Scripto",
      description: "AI-Powered Digital Identity Ecosystem",
      to: "/blogbio",
      icon: Crown,
      color: "from-purple-600 to-blue-600",
      features: [
        {
          title: "Neural Persona Engine", icon: Cpu,
          description: "GPT-4 powered personality synthesis with emotional intelligence modeling"
        },
        {
          title: "Cross-Platform Optimization", icon: Smartphone,
          description: "Automatic formatting for 45+ social platforms including TikTok, LinkedIn, and niche communities"
        },
        {
          title: "Tone Matrix", icon: Users,
          description: "Adaptive bio tone — pro, casual, technical, creative."
        },
        {
          title: "Analytics Dashboard", icon: BarChart,
          description: "Real-time performance tracking across platforms with engagement predictions"
        }
      ],
      stats: [
        { value: "1.8M+", label: "Bios Generated", icon: Hash },
        { value: "4.9/5", label: "User Rating", icon: Star },
        { value: "50ms", label: "Generation Speed", icon: Zap }
      ],
      specs: [
        { label: "AI Model", value: "GPT-4 + Custom NLP", icon: Network },
        { label: "Languages", value: "28 Languages", icon: Globe },
        { label: "Integrations", value: "Zapier, Make, API", icon: Terminal }
      ]
    },
    {
      title: "Secret Key",
      description: "Quantum-Resistant Security Infrastructure",
      to: "/blogsecret",
      icon: Shield,
      color: "from-emerald-600 to-green-600",
      features: [
        {
          title: "Post-Quantum Cryptography", icon: Gem,
          description: "NIST-approved lattice-based algorithms resistant to quantum attacks"
        },
        {
          title: "Zero-Knowledge Architecture", icon: Fingerprint,
          description: "End-to-end encryption where even we can't access your data"
        },
        {
          title: "Threat Intelligence", icon: ShieldHalf,
          description: "Real-time dark web monitoring and breach anticipation system"
        },
        {
          title: "Biometric Vault", icon: Cloud,
          description: "FIDO2 certified secure storage with multi-factor authentication"
        }
      ],
      stats: [
        { value: "2.3M+", label: "Secrets Protected", icon: Database },
        { value: "100%", label: "Audit Success", icon: ShieldCheck },
        { value: "<10ns", label: "Encryption Latency", icon: Clock }
      ],
      specs: [
        { label: "Encryption", value: "AES-256 + XChaCha20", icon: Key },
        { label: "Compliance", value: "GDPR, HIPAA, SOC2", icon: BookOpen },
        { label: "Availability", value: "99.999% Uptime", icon: RotateCw }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-zinc-900">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />

        <div className="relative z-10 text-center max-w-4xl px-4">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10 animate-fade-in">
            <Gem className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              CUSTOPHI v2.0
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-purple-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent">
              Digital Sovereignty
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-medium text-gray-300 mt-4 block">
              Enterprise-Grade Tools for Personal Digital Empowerment
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 animate-fade-in-up">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-px rounded-xl">
              <div className="bg-gray-900 h-full p-4 rounded-xl flex items-center gap-3">
                <Zap className="w-5 h-5 text-purple-300" />
                <div>
                  <div className="text-sm font-medium text-purple-300">AI Compute</div>
                  <div className="text-xs text-purple-100">50,000+ GPU hours daily</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-px rounded-xl">
              <div className="bg-gray-900 h-full p-4 rounded-xl flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-300" />
                <div>
                  <div className="text-sm font-medium text-emerald-300">Security Layer</div>
                  <div className="text-xs text-emerald-100">256-bit + Quantum Resistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Ecosystem */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
        {tools.map((tool, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-800 to-black rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.color} bg-opacity-20`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{tool.title}</h2>
                    <p className="text-gray-400 mt-1">{tool.description}</p>
                  </div>
                </div>

                {/* Feature Matrix */}
                <div className="grid md:grid-cols-2 gap-6">
                  {tool.features.map((feature, fIndex) => (
                    <div key={fIndex} className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-purple-400/30 transition-colors">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-2 rounded-lg bg-white/5">
                          <feature.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Technical Specifications */}
                <div className="grid md:grid-cols-3 gap-4">
                  {tool.specs.map((spec, sIndex) => (
                    <div key={sIndex} className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                      <spec.icon className="w-5 h-5 text-emerald-400" />
                      <div>
                        <div className="text-xs text-gray-400">{spec.label}</div>
                        <div className="text-sm font-medium text-white">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="lg:w-80 space-y-6">
                <div className="bg-black/30 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    {tool.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-2">
                          <stat.icon className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-400 text-sm">{stat.label}</span>
                        </div>
                        <span className="text-lg font-bold text-white">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={tool.to}
                  className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 ${index === 0
                      ? 'bg-purple-700 hover:bg-purple-600 text-white'
                      : 'bg-emerald-700 hover:bg-emerald-600 text-white'
                    }`}
                >
                  <span>Explore {tool.title}</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global Network Section */}
      <div className="py-20 bg-gradient-to-r from-purple-900/40 to-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-black/30 p-12 rounded-3xl border border-white/10 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Global Security Infrastructure
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div className="p-6 border-r border-white/10">
                <Server className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">23</div>
                <div className="text-gray-400">Global Data Centers</div>
              </div>
              <div className="p-6 border-r border-white/10">
                <Globe className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">154</div>
                <div className="text-gray-400">Countries Supported</div>
              </div>
              <div className="p-6 border-r border-white/10">
                <ShieldHalf className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">1.2M</div>
                <div className="text-gray-400">Threats Neutralized Daily</div>
              </div>
              <div className="p-6">
                <Network className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">98ms</div>
                <div className="text-gray-400">Average Latency</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="text-lg font-semibold text-white mb-3">Content Delivery</div>
                <p className="text-gray-400 text-sm">Edge-cached responses in 230+ locations worldwide</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="text-lg font-semibold text-white mb-3">Compliance</div>
                <p className="text-gray-400 text-sm">GDPR, CCPA, ISO 27001, SOC 2 Type II certified</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="text-lg font-semibold text-white mb-3">Redundancy</div>
                <p className="text-gray-400 text-sm">Multi-AZ deployments with automatic failover</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-8 rounded-3xl border border-white/10">
              <div className="text-lg font-semibold text-white mb-4">Bio Scripto Applications</div>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Influencer Brand Positioning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Developer Profile Optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Corporate Executive Branding</span>
                </div>
                <div className="flex items-center gap-3">
                  <Circle className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Personal Brand Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Multilingual Profile Creation</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 p-8 rounded-3xl border border-white/10">
              <div className="text-lg font-semibold text-white mb-4">Secret Key Implementations</div>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Database Credential Rotation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cloud className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Cloud Infrastructure Secrets</span>
                </div>
                <div className="flex items-center gap-3">
                  <Fingerprint className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Biometric Authentication Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">CI/CD Pipeline Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Compliance Audit Preparation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}