'use client';

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium tracking-wide transition-transform transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[color:var(--btn-accent)] active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'rounded-full bg-[#00FFD1] text-black hover:bg-white hover:shadow-[0_0_24px_rgba(0,255,209,.5)]',
        secondary: 'rounded-full bg-white/5 backdrop-blur-md border border-white/12 text-white/90 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_24px_rgba(0,255,209,.18)] hover:scale-[1.02]',
        ghost: 'rounded-full bg-transparent border border-transparent text-white/80 hover:bg-white/5 hover:text-white',
        icon: 'rounded-full bg-white/5 backdrop-blur-md border border-white/12 text-white/90 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_24px_rgba(0,255,209,.18)] hover:scale-[1.02]',
        chip: 'bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-[#E5E7EB] hover:border-[#00FFD1] hover:glow-cyan-soft transition-all duration-200',
      },
      size: {
        default: 'px-5 py-2.5 text-sm',
        sm: 'px-4 py-2 text-xs',
        lg: 'px-6 py-3 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'default',
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };