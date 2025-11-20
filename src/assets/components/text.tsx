import React from "react";

// Importa o cva para criar variantes de classe e VariantProps para inferir tipos das variantes
import { cva, type VariantProps } from "class-variance-authority";

// Cria um conjunto de variantes de estilo usando class-variance-authority
export const textVariants = cva("font-sans text-gray-400", {
    variants: {
        // Cada chave é uma opção de variante
        variant: {
            "body-sm-bold": "text-sm leading-5 font-semibold",
            "body-md": "text-base leading-6 font-normal",
            "body-md-bold": "text-base leading-6 font-semibold",
        }
    },
    // Define qual variante deve ser usada caso nenhuma seja passada
    defaultVariants: {
        variant: 'body-md'
    }
})

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
};

export default function Text({ as = 'span', variant, className, children, ...props }: TextProps) {
    return React.createElement(
        as,
        {
            className: textVariants({ variant, className }),
            ...props
        },

        // Conteúdo exibido dentro do elemento HTML
        children
    )
}