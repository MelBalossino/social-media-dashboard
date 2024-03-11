

const Header = () => {
    return (
        <header className=" bg-Very-Pale-Blue">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
            <hr />
            <div className="flex justify-between">
                <p>Dark Mode</p>
                <input type="checkbox" />
            </div>
        </header>
    )
}

export default Header;