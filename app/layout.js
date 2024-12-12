import Navbar from "@/component/Navbar"

export const metadata={
  title:"Altamash goc",
  description:"Altamash Group of Companies"
}

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Navbar/>
        {children}
      </body>
    </html>
  )
}