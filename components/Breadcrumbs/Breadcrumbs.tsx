'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.link}>
                Home
            </Link>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <span className={styles.separator}>/</span>
                    {item.href ? (
                        <Link href={item.href} className={styles.link}>
                            {item.label}
                        </Link>
                    ) : (
                        <span className={styles.active} aria-current="page">
                            {item.label}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
}
