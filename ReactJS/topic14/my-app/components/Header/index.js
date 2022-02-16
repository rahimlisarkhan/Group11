import Link  from "next/link"

export const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/movie">
                        Movie
                    </Link>
                </li>
            </ul>
        </header>
    )
}