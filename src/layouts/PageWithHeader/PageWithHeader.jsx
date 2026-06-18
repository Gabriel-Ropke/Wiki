import { Header } from "../../components/Header/Header"
import "./PageWithHeader.css"

export function PageWithHeader({ children, mainClass = "" }) {
    return (
        <div id="pageWithHeaderContainer">
            <Header />
            <main className={`pageWithHeaderContent ${mainClass}`.trim()}>
                {children}
            </main>
        </div>
    )
}