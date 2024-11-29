import Link from "next/link";

export default function NotFound() {
    return <>
        <section className="default">
            <div className="default__wrapper">
                <h1 className="default__title">404</h1>
                <h4 className="default__name">Page not found -&gt; <Link href="/">Go Home</Link></h4>
            </div>
        </section>
    </>
}