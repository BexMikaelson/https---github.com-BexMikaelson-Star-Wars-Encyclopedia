const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Star Wars Encyclopedia</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/people" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>people</a>
                <a href="/films">Films</a>
            </div>
        </nav>
     );
}
 
export default Navbar;