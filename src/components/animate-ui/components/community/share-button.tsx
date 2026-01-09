'use client';

import * as React from 'react';
import { Share2, Github, X, Instagram, Linkedin, Copy, Check, Figma } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, AnimatePresence, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "relative overflow-hidden cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      size: {
        default: 'min-w-28 h-10 px-4 py-2',
        sm: 'min-w-24 h-9 rounded-md gap-1.5 px-3',
        md: 'min-w-28 h-10 px-4 py-2',
        lg: 'min-w-32 h-11 px-8',
      },
      icon: {
        suffix: 'pl-4',
        prefix: 'pr-4',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

const iconSizeMap = { sm: 14, md: 18, lg: 24, default: 16 };

interface ShareButtonProps extends Omit<HTMLMotionProps<"button">, "size" | "onDrag" | "onDragStart" | "onDragEnd">, VariantProps<typeof buttonVariants> {
  onIconClick?: (platform: string) => void;
}

export function ShareButton({ 
  children, 
  className, 
  size, 
  icon, 
  onIconClick, 
  ...props 
}: ShareButtonProps) {
  const [hovered, setHovered] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  
  const currentSizeKey = (size && size in iconSizeMap ? size : 'default') as keyof typeof iconSizeMap;
  const iconSize = iconSizeMap[currentSizeKey];
  const shareUrl = "https://www.fluxenta.dev";

  // MOBILE FIX: Toggle state on tap for touch devices
  const handleToggle = () => {
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
      setHovered(!hovered);
    }
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setHovered(false); // Reset button state after showing success
      }, 2000);
      onIconClick?.('copy');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let url = "";

    switch (platform) {
      case 'x':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'github':
        url = `https://github.com/`; 
        break;
      case 'instagram':
        url = `https://www.instagram.com/`;
        break;
    }

    if (url) window.open(url, '_blank', 'noopener,noreferrer');
    setHovered(false); // Close icons after interaction
    onIconClick?.(platform);
  };

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* SUCCESS TOAST */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute z-[110] bg-cyan-custom text-black text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap pointer-events-none shadow-[0_0_15px_rgba(102,252,243,0.4)]"
          >
            LINK COPIED
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        {...(props as any)}
        onClick={handleToggle}
        onMouseEnter={() => !window.matchMedia("(pointer: coarse)").matches && setHovered(true)}
        onMouseLeave={() => !window.matchMedia("(pointer: coarse)").matches && setHovered(false)}
        className={cn(buttonVariants({ size, className, icon }))}
      >
        <AnimatePresence initial={false} mode="wait">
          {!hovered ? (
            <motion.div 
              key="content" 
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} 
              className="flex items-center gap-2"
            >
              {children as React.ReactNode} 
              <Share2 size={iconSize} className="opacity-40" />
            </motion.div>
          ) : (
            <motion.div 
              key="icons"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 20 }}
              className="flex gap-4 px-2"
            >
              <Github 
                size={iconSize} 
                onClick={(e) => handleShare('github', e)} 
                className="hover:text-cyan-custom transition-colors cursor-pointer opacity-60 hover:opacity-100" 
              />
              <X 
                size={iconSize} 
                onClick={(e) => handleShare('x', e)} 
                className="hover:text-cyan-custom transition-colors cursor-pointer opacity-60 hover:opacity-100" 
              />
              <Instagram 
                size={iconSize} 
                onClick={(e) => handleShare('instagram', e)} 
                className="hover:text-cyan-custom transition-colors cursor-pointer opacity-60 hover:opacity-100" 
              />
              <Linkedin 
                size={iconSize} 
                onClick={(e) => handleShare('linkedin', e)} 
                className="hover:text-cyan-custom transition-colors cursor-pointer opacity-60 hover:opacity-100" 
              />
              <div 
                onClick={handleCopy}
                className="hover:text-cyan-custom transition-colors cursor-pointer opacity-60 hover:opacity-100"
              >
                {copied ? <Check size={iconSize} /> : <Copy size={iconSize} />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}