'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview } from '@lib/gtagHelper'
import { useEffect } from 'react'


const GoogleAnalitycs = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = pathname + searchParams.toString()
        pageview(process.env.GA_MEASUREMENT_ID, url)
    }, [pathname, searchParams, process.env.GA_MEASUREMENT_ID])

    return (
        <div>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`} />
            <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('consent', 'default', {
                        'analytics_storage': 'denied'
                    });

                    gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
                `}} />
        </div>
    )
}

export default GoogleAnalitycs