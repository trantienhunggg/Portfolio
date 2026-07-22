import { Download } from 'lucide-react';

interface DownloadCVButtonProps {
  className?: string;
  variant?: 'outline' | 'nav';
}

export default function DownloadCVButton({ className = '', variant = 'outline' }: DownloadCVButtonProps) {
  if (variant === 'nav') {
    return (
      <a
        href="/TranTienHung_CV.pdf"
        download="TranTienHung_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300 ${className}`}
      >
        <Download size={14} />
        <span>CV</span>
      </a>
    );
  }

  return (
    <a
      href="/TranTienHung_CV.pdf"
      download="TranTienHung_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block cursor-pointer ${className}`}
    >
      <button
        type="button"
        className="rounded-full px-7 py-3 sm:px-9 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm md:text-base text-[#D7E2EA] font-medium uppercase tracking-widest cursor-pointer flex items-center justify-center gap-2 border.5 border-[#D7E2EA]/60 bg-[#0C0C0C]/50 backdrop-blur-sm hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300 shadow-lg"
        style={{
          border: '2px solid rgba(215, 226, 234, 0.6)',
        }}
      >
        <Download size={18} />
        <span>Download CV</span>
      </button>
    </a>
  );
}
