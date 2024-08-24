import React from "react"
import WalletConnection from "./WalletConnection"

export default function Header() {
    return (
        <div className="h-[10vh] bg-black flex justify-center">
            <div className="max-w-[900px] flex justify-between items-center min-w-full">
                <div className="text-white font-bold text-[30px]">
                    Hello
                </div>
                <div>
                    <WalletConnection />
                </div>
            </div>
        </div>
    )
}