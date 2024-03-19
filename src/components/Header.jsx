import { useState, useEffect } from "react"

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <header className=" bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-8 md:px-10 mx-auto xl:px-3 mb-[1000px] md:mb-[480px] xl:mb-[200px] max-w-[1440px] ">
            <div>
                <h1 className=" text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1 md:text-[28px]">Social Media Dashboard</h1>
                <p className=" text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6">Total Followers: 23,004</p>
                <hr className=" mb-[19px] md:hidden " />
            </div>
            <div className="flex justify-between gap-[13px]">
                <p className=" text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">Dark Mode</p>
                <label htmlFor="darkmode" className=" relative bg-Toggle w-12 h-6 rounded-full overflow-hidden 
                cursor-pointer p-[3px] ">
                    <input onClick={handleClick} type="checkbox" id="darkmode" className=" sr-only peer" />
                    <div className=" w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0"></div>
                    <div className=" w-[18px] h-[18px] bg-Light-Grayish-Blue dark:bg-Very-Dark-Blue-Top rounded-full peer-checked:translate-x-[24px] transition-all"></div>
                </label>
            </div>
        </header>
    )
}

export default Header;