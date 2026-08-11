import React, { ReactNode } from "react"

interface TextWrapper {
    children: ReactNode;
    className?: string
}


export function Text({children, className = ""}:TextWrapper) {
    return(
        <p className={className}>
            {children}
        </p>
    )
}

interface TextLinkWrapper {
    children: ReactNode;
    className?: string
    href: string
}


export function TextLink({children, href, className = ""}:TextLinkWrapper) {
    return(
        <a href={href} className={className}>{children}</a>
    )
}