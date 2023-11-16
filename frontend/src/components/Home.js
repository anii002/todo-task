import React, { useState } from "react"
import Login from "./Login";
import Signup from "./Signup";
function Home() {
    const [page, setPage] = useState('login')
    const setComponent = (val) => {
        setPage(val)
    }
    return (
        <>
            <div className="home">
                {page === "login" ?
                    <Login setComponent={setComponent} />
                    : <Signup setComponent={setComponent} />
                }

            </div>
        </>
    )
}

export default Home;