import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare function Alert({ Text }: {
    Text?: string;
}): react_jsx_runtime.JSX.Element;
declare function AlertGreen({ Text }: {
    Text?: string;
}): react_jsx_runtime.JSX.Element;
declare function AlertNeutral({ Text }: {
    Text?: string;
}): react_jsx_runtime.JSX.Element;

declare function Avatar({ UrlImage, Height, Width, alt }: {
    UrlImage: string;
    Height: number;
    Width: number;
    alt: string;
}): react_jsx_runtime.JSX.Element;
declare function AvatarOnlineIndicator({ UrlImage, Height, Width, alt }: {
    UrlImage: string;
    Height: number;
    Width: number;
    alt: string;
}): react_jsx_runtime.JSX.Element;
declare function AvatarStr({ Text }: {
    Text: string;
}): react_jsx_runtime.JSX.Element;

declare function VerifiedBadge({ Text }: {
    Text?: string;
}): react_jsx_runtime.JSX.Element;
declare function DefaultBadge({ Text }: {
    Text?: string;
}): react_jsx_runtime.JSX.Element;

declare function Chip({ Text }: {
    Text: string;
}): react_jsx_runtime.JSX.Element;

declare function CheckBox({ Text }: {
    Text: string;
}): react_jsx_runtime.JSX.Element;

declare function InputDark(): react_jsx_runtime.JSX.Element;
declare function InputLight(): react_jsx_runtime.JSX.Element;

interface TextWrapper {
    children: ReactNode;
    className?: string;
}
declare function Text({ children }: TextWrapper): react_jsx_runtime.JSX.Element;
interface TextLinkWrapper {
    children: ReactNode;
    className?: string;
    href: string;
}
declare function TextLink({ children, href }: TextLinkWrapper): react_jsx_runtime.JSX.Element;

declare function FormDark(): react_jsx_runtime.JSX.Element;
declare function FormLight(): react_jsx_runtime.JSX.Element;

interface IconWrapper {
    children: ReactNode;
    Variant: 'default' | 'warning' | 'success' | 'danger';
}
declare function IconBox({ children, Variant }: IconWrapper): react_jsx_runtime.JSX.Element;

declare function ButtonDark({ title, href }: {
    title: string;
    href: string;
}): react_jsx_runtime.JSX.Element;
declare function ButtonLight({ title, href }: {
    title: string;
    href: string;
}): react_jsx_runtime.JSX.Element;

export { Alert, AlertGreen, AlertNeutral, Avatar, AvatarOnlineIndicator, AvatarStr, ButtonDark, ButtonLight, CheckBox, Chip, DefaultBadge, FormDark, FormLight, IconBox, InputDark, InputLight, Text, TextLink, VerifiedBadge };
