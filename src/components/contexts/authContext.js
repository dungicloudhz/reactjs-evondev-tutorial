import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
    const [user, setUser] = useState({
        userId: 1,
        fullname: "evondev",
        avatar: "https://images.unsplash.com/photo-1678653302233-621c210c3a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        email: "evondev@gmail.com",
    });

    const value = { user, setUser };

    return (
        <AuthContext.Provider {...props} value={value}></AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    if (typeof context === "undefined")
        throw new Error("useAuth must be used within a AuthProvider");
    return context;
}

export { useAuth, AuthProvider };
