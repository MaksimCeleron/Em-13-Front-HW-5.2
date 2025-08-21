import './style.css'

const PageLayout = ({title, children} : {title:string, children:React.ReactNode}) =>{
  return (
    <div className="wrapper">
      <header className="header">
        <ul>
          <li><a href="/">Головна</a></li>
          <li><a href="/firstpage">Сторінка 1</a></li>
          <li><a href="/secondpage">Сторінка 2</a></li>
          <li><a href="/thirdpage">Сторінка 3</a></li>
        </ul>
      </header>
      <main className="content">
        <h1>{title}</h1>
        {children}
      </main>
      <footer className="footer">
        MaksimCeleron 2025
      </footer>
    </div>
  )
}

export default PageLayout