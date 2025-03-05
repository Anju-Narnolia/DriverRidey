import React, { useState } from "react";
import ChatBox from "./ChatBox";
function Chat() {
    const [showChat, setShowChat] = useState(false);
    const [user, setUser] = useState({ name: "", email: "", joined: false });

    const handleJoin = () => {
        if (user.name.trim() && user.email.trim()) {
            setUser({ ...user, joined: true });
        }
    };
    return (
        <>
            <div className="fixed bottom-10 right-10 ">
                <div className="flex justify-between bg-driverGreen p-2 gap-2 rounded-t-lg  shadow-md"   >
                    <p className="font-bold text-white">ChatBox</p>
                    <i className={`${showChat ? "fa-solid fa-angle-down " : "fa-solid fa-comment"} text-white  cursor-pointer text-2xl`} onClick={() => setShowChat(!showChat)}></i>
                </div>
                {showChat && (
                    <div className=" w-96 border-x border-gray-300">
                        {!user.joined ? (
                            <div className=" flex flex-col gap-2 bg-white p-5">
                                <p className="font-bold">Name</p>
                                <input
                                    className=" bg-gray-200 p-2 rounded-md"
                                    type="text"
                                    placeholder="Enter Name"
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                />
                                <p className="font-bold">Email</p>
                                <input
                                    className=" bg-gray-200 p-2 rounded-md"
                                    type="email"
                                    placeholder="Enter Email"
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                />
                                <button
                                    className="bg-driverGreen text-white p-1 rounded-md"
                                    onClick={handleJoin}>Join Chat</button>
                            </div>
                        ) : (
                            <ChatBox user={user} />
                        )}
                    </div>
                )}</div>
        </>)
}
export default Chat;