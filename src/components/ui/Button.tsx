import React from 'react';
import { motion } from 'framer-motion';
import { buttonHover } from '../../utils/animations';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  target?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  target,
  disabled = false,
  icon,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer border-2 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-cosmic-secondary text-white border-cosmic-secondary hover:bg-cosmic-purple hover:border-cosmic-purple glow-hover',
    secondary: 'bg-cosmic-accent text-cosmic-primary border-cosmic-accent hover:bg-yellow-400 hover:border-yellow-400',
    outline: 'bg-transparent text-cosmic-text border-cosmic-secondary hover:bg-cosmic-secondary hover:text-white glow-border',
    ghost: 'bg-transparent text-cosmic-text border-transparent hover:bg-cosmic-secondary/20 hover:text-cosmic-accent',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {/* Cosmic glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cosmic-secondary via-cosmic-purple to-cosmic-accent opacity-0 hover:opacity-20 transition-opacity duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={combinedClasses}
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      variants={buttonHover}
      initial="rest"
      whileHover={!disabled ? "hover" : "rest"}
      whileTap={!disabled ? "tap" : "rest"}
    >
      {buttonContent}
    </motion.button>
  );
}; 