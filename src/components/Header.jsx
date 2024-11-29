import Link from "next/link"

const Header = () => {
  return (
    <header className="header">
        <div className="header__logo">NextJS</div>
        <div className="header__items">
            <Link href="/" className="header__link">Home</Link>
            <Link href="/about" className="header__link">About</Link>
        </div>
    </header>
  )
}

export default Header