'use client';

import { getLocalStorage, setLocalStorage } from '@lib/storageHelper';
import Link from 'next/link'
import { useEffect, useState } from 'react';

const CookieBanner = () => {
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

    }, [cookieConsent]);
    return (
        <div className={`cookiebanner${cookieConsent !== null ? 'cookiebanner--hidden' : ''}`}>
            <div className='cookiebanner__text'>
                <Link href="/cookies"><p>We use <span className="cookiebanner__text--highlight">cookies</span> on our site.</p></Link>
            </div>
            <div className='cookiebanner__buttons'>
                <button onClick={() => setCookieConsent(false)} className="cookiebanner__button cookiebanner__button--decline">Decline</button>
                <button onClick={() => setCookieConsent(true)} className="cookiebanner__button">Allow Cookies</button>
            </div>
        </div>
    )
}

export default CookieBanner