import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, MouseEventHandler } from 'react';

declare function Alert({ Text, className }: {
    Text?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function AlertGreen({ Text, className }: {
    Text?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function AlertNeutral({ Text, className }: {
    Text?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function Avatar({ UrlImage, Height, Width, alt, className }: {
    UrlImage: string;
    Height: number;
    Width: number;
    alt: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function AvatarOnlineIndicator({ UrlImage, Height, Width, alt, className }: {
    UrlImage: string;
    Height: number;
    Width: number;
    alt: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function AvatarStr({ Text, className }: {
    Text: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function VerifiedBadge({ Text, className }: {
    Text?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function DefaultBadge({ Text, className }: {
    Text?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function Chip({ Text, className }: {
    Text: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function CheckBox({ Text, className }: {
    Text: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function InputDark({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function InputLight({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;

interface TextWrapper {
    children: ReactNode;
    className?: string;
}
declare function Text({ children, className }: TextWrapper): react_jsx_runtime.JSX.Element;
interface TextLinkWrapper {
    children: ReactNode;
    className?: string;
    href: string;
}
declare function TextLink({ children, href, className }: TextLinkWrapper): react_jsx_runtime.JSX.Element;

declare function FormDark({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function FormLight({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;

interface IconWrapper {
    children: ReactNode;
    Variant: 'default' | 'warning' | 'success' | 'danger';
    className?: string;
}
declare function IconBox({ children, Variant, className }: IconWrapper): react_jsx_runtime.JSX.Element;

type ButtonVariant = "dark" | "light" | "danger" | "success" | "warn" | "primary";
interface ButtonProps {
    title: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    variant?: ButtonVariant;
    className?: string;
}
declare function Button({ title, href, variant, onClick, className }: ButtonProps): react_jsx_runtime.JSX.Element;

interface AlertBoxProps {
    title?: string;
    children?: ReactNode;
    open: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    confirmText?: string;
    cancelText?: string;
    className?: string;
}
declare function AlertBox({ title, children, open, onClose, onConfirm, confirmText, cancelText, className, }: AlertBoxProps): react_jsx_runtime.JSX.Element | null;

type NotificationVariant = "success" | "danger" | "warn" | "info" | "neutral";
interface NotificationProps {
    title?: string;
    message?: string;
    variant?: NotificationVariant;
    duration?: number;
    showProgress?: boolean;
    onClose?: () => void;
    className?: string;
}
declare function Notification({ title, message, variant, duration, showProgress, onClose, className, }: NotificationProps): react_jsx_runtime.JSX.Element | null;

interface TabsItem {
    label: string;
    content: ReactNode;
}
declare function Tabs({ items, defaultIndex, className }: {
    items: TabsItem[];
    defaultIndex?: number;
    className?: string;
}): react_jsx_runtime.JSX.Element;

type TooltipPosition = "top" | "bottom" | "left" | "right";
declare function Tooltip({ label, children, position, className, }: {
    label: string;
    children: ReactNode;
    position?: TooltipPosition;
    className?: string;
}): react_jsx_runtime.JSX.Element;

interface ModalProps {
    open: boolean;
    onClose?: () => void;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
}
declare function Modal({ open, onClose, title, children, footer, className }: ModalProps): react.ReactPortal | null;

declare function Skeleton({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;

interface SwitchProps {
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    className?: string;
}
declare function Switch({ defaultChecked, checked, onChange, label, className }: SwitchProps): react_jsx_runtime.JSX.Element;

interface DropdownItem {
    label: string;
    onClick?: () => void;
    danger?: boolean;
}
interface DropdownProps {
    label?: string;
    trigger?: ReactNode;
    items: DropdownItem[];
    className?: string;
}
declare function Dropdown({ label, trigger, items, className }: DropdownProps): react_jsx_runtime.JSX.Element;

interface CardProps {
    title?: string;
    subtitle?: string;
    footer?: ReactNode;
    className?: string;
    children: ReactNode;
}
declare function Card({ title, subtitle, footer, className, children }: CardProps): react_jsx_runtime.JSX.Element;

interface SelectOption {
    label: string;
    value: string;
}
interface SelectProps {
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    className?: string;
}
declare function Select({ label, placeholder, options, value, defaultValue, onChange, className, }: SelectProps): react_jsx_runtime.JSX.Element;

interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface RadioGroupProps {
    label?: string;
    options: RadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    direction?: "vertical" | "horizontal";
    className?: string;
}
declare function RadioGroup({ label, options, value, defaultValue, onChange, direction, className, }: RadioGroupProps): react_jsx_runtime.JSX.Element;

type ProgressVariant = "default" | "success" | "danger" | "warn" | "info";
interface ProgressProps {
    value?: number;
    variant?: ProgressVariant;
    showLabel?: boolean;
    indeterminate?: boolean;
    className?: string;
}
declare function Progress({ value, variant, showLabel, indeterminate, className, }: ProgressProps): react_jsx_runtime.JSX.Element;

interface RatingProps {
    value?: number;
    defaultValue?: number;
    max?: number;
    readOnly?: boolean;
    onChange?: (value: number) => void;
    size?: "sm" | "md" | "lg";
    className?: string;
}
declare function Rating({ value, defaultValue, max, readOnly, onChange, size, className, }: RatingProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}
declare function Breadcrumb({ items, className }: BreadcrumbProps): react_jsx_runtime.JSX.Element;

type DividerVariant = "zinc" | "success" | "danger" | "warn" | "info";
interface DividerProps {
    label?: string;
    orientation?: "horizontal" | "vertical";
    variant?: DividerVariant;
    className?: string;
}
declare function Divider({ label, orientation, variant, className }: DividerProps): react_jsx_runtime.JSX.Element;

interface StatProps {
    label: string;
    value: string | number;
    trend?: "up" | "down";
    trendLabel?: string;
    icon?: ReactNode;
    className?: string;
}
declare function Stat({ label, value, trend, trendLabel, icon, className }: StatProps): react_jsx_runtime.JSX.Element;

interface TimelineItem {
    title: string;
    description?: string;
    time?: string;
    active?: boolean;
}
interface TimelineProps {
    items: TimelineItem[];
    className?: string;
}
declare function Timeline({ items, className }: TimelineProps): react_jsx_runtime.JSX.Element;

interface PaginationProps {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
    siblings?: number;
    className?: string;
}
declare function Pagination({ page, totalPages, onChange, siblings, className }: PaginationProps): react_jsx_runtime.JSX.Element | null;

declare function Accordion({ title, children, className }: {
    title?: string;
    children?: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function Spinner({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;

export { Accordion, Alert, AlertBox, type AlertBoxProps, AlertGreen, AlertNeutral, Avatar, AvatarOnlineIndicator, AvatarStr, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, Button, Card, type CardProps, CheckBox, Chip, DefaultBadge, Divider, type DividerProps, type DividerVariant, Dropdown, type DropdownItem, type DropdownProps, FormDark, FormLight, IconBox, InputDark, InputLight, Modal, type ModalProps, Notification, type NotificationProps, type NotificationVariant, Pagination, type PaginationProps, Progress, type ProgressProps, type ProgressVariant, RadioGroup, type RadioGroupProps, type RadioOption, Rating, type RatingProps, Select, type SelectOption, type SelectProps, Skeleton, Spinner, Stat, type StatProps, Switch, type SwitchProps, Tabs, type TabsItem, Text, TextLink, Timeline, type TimelineItem, type TimelineProps, Tooltip, type TooltipPosition, VerifiedBadge };
