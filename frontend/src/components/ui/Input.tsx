import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-3 w-full">
            {label && <label className="text-lg font-medium text-gray-400">{label}</label>}
            <input
                className={`bg-surface border border-gray-800 rounded-lg px-6 py-6 text-xl text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all ${className}`}
                {...props}
            />
        </div>
    );
}
