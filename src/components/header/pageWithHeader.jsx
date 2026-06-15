import { Header } from "./header"
import "./pageWithHeader.css"

export function PageWithHeader({ children }) {
    return (
        <div id="pageWithHeaderContainer">
            <Header />
            <main className="pageWithHeaderContent">
                {children}
            </main>
        </div>
    )
}