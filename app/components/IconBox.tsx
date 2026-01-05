import React, { Children, ReactNode } from "react"

interface IconWrapper{
    children: ReactNode;
    Variant: 'default' | 'warning' | 'success' | 'danger'
}

export function IconBox({children, Variant = "default"}: IconWrapper) {
    const ColorScheme = {
        default: 'bg-blue-500 inset-shadow-sm inset-shadow-blue-300',
        warning: 'bg-yellow-500 inset-shadow-sm inset-shadow-yellow-300',
        success: 'bg-green-500 inset-shadow-sm inset-shadow-green-300',
        danger: 'bg-red-500 inset-shadow-sm inset-shadow-red-300'
    }


    return(
        <div className={`p-2 w-fit h-fit flex justify-center items-center cursor-pointer ${ColorScheme[Variant]} rounded-lg text-shadow-md`}>
            {children}
        </div>
    )
}