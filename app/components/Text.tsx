import React, { ReactNode } from "react"
import Link from "next/link";

interface TextWrapper {
    children?: ReactNode;
    className?: string
    costum?: string
}


export function Text({children, costum}:TextWrapper) {
    return(
        <p className={costum}>
            {children}
        </p>
    )
}

interface TextLinkWrapper {
    children?: ReactNode;
    className?: string
    href: string
}


export function TextLink({children, href}:TextLinkWrapper) {
    return(
        <Link href={href}>{children}</Link>
    )
}