import React, { useState } from 'react';
import { studioConfig } from '../config/studioConfig';
import { X, Sparkles, Check, Copy, ExternalLink, Code2, Rocket, Phone, MessageSquare, MapPin } from 'lucide-react';

interface DemoCustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoCustomizerDrawer: React.FC<DemoCustomizerDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'config' | 'checklist'>('overview');

  if (!isOpen) return null;

  const handleCopyConfigSnippet = () => {
    const snippet = `// To customize this studio for your client, edit src/config/studioConfig.ts:
export const studioConfig = {
  brand: {
    name: "Your Studio Name",
    tagline: "Your Studio Tagline",
    city: "Your City",
  },
  contact: {
    phone: "+91 98765 XXXXX",
    whatsappNumber: "9198765XXXXX",
    email: "hello@yourdomain.com",
    address: "Your Street Address",
  },
  forms: {
    formspreeEndpoint: "https://formspree.io/f/your_form_id",
  }
};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg h-full overflow-y-auto shadow-2xl flex flex-col justify-between border-l border-[#EFE8E1]">
        
        {/* Drawer Header */}
        <div>
          <div className="p-6 bg-[#2E1F21] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#8B263E] flex items-center justify-center text-[#F4B8C5]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold tracking-wide">
                  Stack &amp; Pixel Sales Demo Suite
                </h3>
                <p className="text-[11px] text-[#F4B8C5]">
                  Turnkey Indian Beauty Studio &amp; Academy Architecture
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Customizer Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#EFE8E1] bg-[#FAF8F5] px-6 text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-3 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'overview'
                  ? 'border-[#8B263E] text-[#8B263E] font-semibold'
                  : 'border-transparent text-[#7D6266] hover:text-[#2E1F21]'
              }`}
            >
              Client Pitch Notes
            </button>
            <button
              onClick={() => setActiveTab('config')}
              className={`py-3 px-3 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'config'
                  ? 'border-[#8B263E] text-[#8B263E] font-semibold'
                  : 'border-transparent text-[#7D6266] hover:text-[#2E1F21]'
              }`}
            >
              Config Structure
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`py-3 px-3 border-b-2 cursor-pointer transition-colors ${
                activeTab === 'checklist'
                  ? 'border-[#8B263E] text-[#8B263E] font-semibold'
                  : 'border-transparent text-[#7D6266] hover:text-[#2E1F21]'
              }`}
            >
              Pre-Launch Checklist
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 space-y-6 text-xs text-[#5C4447]">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="p-4 bg-[#FCE7EC]/50 rounded-xl border border-[#F4B8C5] text-[#2E1F21] space-y-1.5">
                  <span className="font-semibold text-xs text-[#8B263E] uppercase tracking-wider">
                    Why This Demo Converts Nail Salon Owners:
                  </span>
                  <p className="text-xs leading-relaxed">
                    Indian salon clients heavily prioritize WhatsApp communication over complex portals. This site connects every service, gallery look, and academy course to prefilled WhatsApp click-to-chat links while maintaining a couture aesthetic.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-sm font-semibold text-[#2E1F21]">
                    Key Business Features Built-in:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span><strong>Zero-Backend WhatsApp Routing:</strong> Prefills service title, duration, and price into the user's WhatsApp automatically.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span><strong>Dual Revenue Focus:</strong> Balanced layout that drives salon bookings AND high-ticket academy course enrollments (₹15,000+).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span><strong>Indian Cultural Alignment:</strong> Bridal lehenga matching, kundan art, Karwa Chauth / Diwali specials, and INR formatting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span><strong>Medical-Grade Hygiene Trust:</strong> Highlights autoclave sterilization to justify premium pricing.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EFE8E1] space-y-2">
                  <h5 className="font-semibold text-[#2E1F21]">
                    Current Demo Presets (Pune Studio)
                  </h5>
                  <div className="font-mono text-[11px] text-[#7D6266] space-y-1">
                    <p>Business: {studioConfig.brand.name}</p>
                    <p>Location: Baner, Pune, Maharashtra</p>
                    <p>WhatsApp: +91 {studioConfig.contact.whatsappNumber.slice(2)}</p>
                    <p>Services: {studioConfig.services.length} items configured</p>
                    <p>Courses: {studioConfig.courses.length} academy programs</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'config' && (
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Every piece of text, phone number, pricing, course module, and image reference lives inside a single file: <code className="bg-[#FAF8F5] px-1 py-0.5 rounded border border-[#EFE8E1] text-[#8B263E]">src/config/studioConfig.ts</code>.
                </p>

                <div className="relative">
                  <pre className="p-4 bg-[#2E1F21] text-[#FAF8F5] rounded-xl font-mono text-[11px] overflow-x-auto max-h-64 leading-tight">
{`// src/config/studioConfig.ts
export const studioConfig = {
  brand: {
    name: '${studioConfig.brand.name}',
    tagline: '${studioConfig.brand.tagline}',
  },
  contact: {
    phone: '${studioConfig.contact.phone}',
    whatsappNumber: '${studioConfig.contact.whatsappNumber}',
    email: '${studioConfig.contact.email}',
    address: '${studioConfig.contact.address}',
  },
  services: [ ...13 services with INR prices ],
  courses: [ ...5 certified courses ],
  packages: [ ...4 bundled rituals ]
};`}
                  </pre>
                  <button
                    onClick={handleCopyConfigSnippet}
                    className="absolute top-3 right-3 p-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EFE8E1] space-y-1">
                  <span className="font-semibold text-[#2E1F21]">How to connect email form delivery:</span>
                  <p className="text-[11px] text-[#7D6266]">
                    1. Create a free form at Formspree.io or Web3Forms.com.<br />
                    2. Paste the endpoint URL into <code className="text-[#8B263E]">studioConfig.forms.formspreeEndpoint</code>.<br />
                    3. All customer appointment requests will land directly in the owner's inbox!
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'checklist' && (
              <div className="space-y-3">
                <h4 className="font-serif text-sm font-semibold text-[#2E1F21]">
                  Client Handover &amp; Launch Checklist
                </h4>
                <div className="space-y-2">
                  <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EFE8E1] flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E07A94] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">1</span>
                    <div>
                      <p className="font-semibold text-[#2E1F21]">Replace Demo Contact Details</p>
                      <p className="text-[11px] text-[#7D6266]">Put real Indian WhatsApp number (+91), salon phone, email, and Google Maps location in studioConfig.ts.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EFE8E1] flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E07A94] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">2</span>
                    <div>
                      <p className="font-semibold text-[#2E1F21]">Configure Formspree or Web3Forms</p>
                      <p className="text-[11px] text-[#7D6266]">Activate the form endpoint so appointment submissions deliver directly to the salon's Gmail.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EFE8E1] flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E07A94] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">3</span>
                    <div>
                      <p className="font-semibold text-[#2E1F21]">Upload Real Portfolio Photography</p>
                      <p className="text-[11px] text-[#7D6266]">Swap the demonstration artwork in the gallery with the salon's own Instagram captures.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EFE8E1] flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E07A94] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">4</span>
                    <div>
                      <p className="font-semibold text-[#2E1F21]">Deploy to Vercel, Netlify, or Cloudflare</p>
                      <p className="text-[11px] text-[#7D6266]">Build with <code>npm run build</code>. Static Vite bundle requires zero server maintenance costs.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 bg-[#FAF8F5] border-t border-[#EFE8E1] flex items-center justify-between">
          <span className="text-[11px] text-[#7D6266]">
            Crafted by <strong className="text-[#2E1F21]">Stack &amp; Pixel</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#2E1F21] rounded-lg hover:bg-[#4A2D39] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
