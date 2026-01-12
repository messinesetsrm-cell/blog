'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`${styles.navbar} glass floating`}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
                Messinese Salvatore
            </Link>

            {/* Desktop Links */}
            <div className={styles.navLinks}>
                <NavLink href="/" current={pathname} onClick={closeMenu}>Home</NavLink>
                <NavLink href="/blog" current={pathname} onClick={closeMenu}>Blog</NavLink>
                <NavLink href="/market" current={pathname} onClick={closeMenu}>Market</NavLink>
                <NavLink href="/multimedia" current={pathname} onClick={closeMenu}>Multimedia</NavLink>
                <NavLink href="/suggest" current={pathname} onClick={closeMenu}>Suggest</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                <span className={`${styles.bar} ${isOpen ? styles.barOpen1 : ''}`}></span>
                <span className={`${styles.bar} ${isOpen ? styles.barOpen2 : ''}`}></span>
                <span className={`${styles.bar} ${isOpen ? styles.barOpen3 : ''}`}></span>
            </button>

            {/* Mobile Menu Dropdown */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''} glass`}>
                <NavLink href="/" current={pathname} onClick={closeMenu}>Home</NavLink>
                <NavLink href="/blog" current={pathname} onClick={closeMenu}>Blog</NavLink>
                <NavLink href="/market" current={pathname} onClick={closeMenu}>Market</NavLink>
                <NavLink href="/multimedia" current={pathname} onClick={closeMenu}>Multimedia</NavLink>
                <NavLink href="/suggest" current={pathname} onClick={closeMenu}>Suggest</NavLink>
            </div>
        </nav>
    );
}

function NavLink({ href, current, children, onClick }: { href: string, current: string, children: React.ReactNode, onClick: () => void }) {
    const isActive = current === href || (href !== '/' && current.startsWith(href));
    return (
        <Link
            href={href}
            className={`${styles.link} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
