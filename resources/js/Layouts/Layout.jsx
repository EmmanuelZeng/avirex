const navigations = [
    {name: "Accueil", href: "/"},
    {name: "Véhicules", href:"/cars"},
    {name: "Services", href: "/services"},
    {name: "A propos", href: "/about"},
    {name: "Contacte", href: "/contact"}
]
export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const [activePage, setActivePage] = useState("/")
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <header class="bg-primary text-white shadow-md">
            <div class="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center mb-4 md:mb-0">
                    <div class="mr-3">
                        <div class="logo-triangles">
                            <div class="triangle triangle-top"></div>
                        </div>
                        <div class="logo-triangles">
                            <div class="triangle triangle-left"></div>
                            <div class="triangle triangle-right"></div>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold text-secondary">ALVIREX CO. LTD.</h1>
                        <p class="text-xs text-secondary tracking-widest">TRUSTED</p>
                    </div>
                </div>
                
                <nav class="flex flex-wrap justify-center">
                    <button class="nav-link px-4 py-2 font-medium">
                        Accueil
                    </button>
                    <button class="nav-link px-4 py-2 font-medium">
                        Véhicules
                    </button>
                    <button class="nav-link px-4 py-2 font-medium">
                        Services
                    </button>
                    <button class="nav-link px-4 py-2 font-medium">
                        À propos
                    </button>
                    <button class="nav-link px-4 py-2 font-medium">
                        Contact
                    </button>
                </nav>
            </div>
        </header>
        <main>
            {children}
        </main>
    </>
  )
}
