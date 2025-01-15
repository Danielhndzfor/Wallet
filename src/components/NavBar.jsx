import React from "react";

function NavBar() {
    return (
        <nav>
            {/* Menú inferior fijo visible en todas las vistas */}
            <div className="fixed bottom-0 left-0 right-0 bg-slate-200 text-white flex justify-around p-4 z-50">
                <a href="#" className="flex flex-col items-center text-decoration-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 10h11M9 21l-3-3m0 0l3-3m-3 3h18m-6-6h3m-3 3l3-3m-3 3l3-3m-6-9l3 3m3-3h3"
                        />
                    </svg>
                    <span className="text-sm">About</span>
                </a>
                <a href="#" className="flex flex-col items-center text-decoration-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.5 15.5h.01"
                        />
                    </svg>
                    <span className="text-sm">Metas</span>
                </a>
                <a
                    href="/home"
                    className="flex flex-col  items-center text-blue-500 bg-white rounded-full p-4 shadow-lg text-decoration-none"
                    style={{ transform: "translateY(-50%)" }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16">
                        <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
                    </svg>
                    <span className="text-sm">Cartera</span>
                </a>
                <a href="#" className="flex flex-col items-center text-decoration-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6.75 9.75h10.5m-10.5 3h7.5m-7.5 3h4.5"
                        />
                    </svg>
                    <span className="text-sm">Sugerencias</span>
                </a>
                <a href="#" className="flex flex-col items-center text-decoration-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6m0 0v12m0-12H6"
                        />
                    </svg>
                    <span className="text-sm">Perfil</span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;



