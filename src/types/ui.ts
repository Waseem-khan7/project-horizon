import type { ButtonHTMLAttributes, ChangeEvent, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  type?: "text" | "email" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type PageHeaderProps = {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  children?: React.ReactNode;
};

export type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  description?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export type TextAreaFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  rows?: number;
  error?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export type ToggleSwitchProps = {
  id: string;
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
};

export type WorkspaceCardProps = {
  // title: string;
  // description?: string;
  children: ReactNode;
};
