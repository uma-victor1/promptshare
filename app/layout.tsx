import '@styles/global.css'

export const metatdata = {
  title: 'promptshare',
  desc: 'Share your chatGPT prompts',
}

const RootLayout = ({
    children}:{children:React.ReactNode}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
