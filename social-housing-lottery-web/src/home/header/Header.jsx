// import React, { useState, useRef } from "react";
import "./header.css";

export default function Header() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const searchRef = useRef(null);

    const bannerUrl =
        "https://www.mof.gov.vn/api/mediafile/media-system/ff16d46a-56cb-409b-83e1-d392f376c80f.png";

    const logoUrl =
        "https://www.mof.gov.vn/api/mediafile/media-system/4f28533f-fed4-4d4b-a0da-88ee0e2a4e0c.png";

    // const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    //
    // const openSearchInput = () => {
    //     const input = searchRef.current;
    //     if (input) {
    //         input.style.width = "180px";
    //         input.style.opacity = 1;
    //         setTimeout(() => input.focus(), 150);
    //     }
    // };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">

            {/* Banner */}
            <div
                className="banner-bg flex items-center justify-start gap-3 px-4 py-4"
                style={{ backgroundImage: `url(${bannerUrl})` }}
            >

            {/* Mobile Menu */}
            {/*    <div className="md:hidden">*/}
            {/*        <svg*/}
            {/*            onClick={toggleMobileMenu}*/}
            {/*            xmlns="http://www.w3.org/2000/svg"*/}
            {/*            width="30"*/}
            {/*            height="30"*/}
            {/*            fill="white"*/}
            {/*            className="cursor-pointer"*/}
            {/*            viewBox="0 0 124 124"*/}
            {/*        >*/}
            {/*            <path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12M112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12"></path>*/}
            {/*        </svg>*/}
            {/*    </div>*/}

                {/* Logo */}
                <a href="/">
                    <img src={logoUrl} alt="logo" className="logo-img" />
                </a>

                {/*/!* Mobile Search *!/*/}
                {/*<div className="md:hidden" onClick={openSearchInput}>*/}
                {/*    🔍*/}
                {/*</div>*/}
            </div>

            {/* Menu Bar */}
            <nav className="menu-bar bg-white/90 backdrop-blur shadow-md border-b border-gray-200 h-20 flex items-center">

                <div className="flex items-center justify-between px-4 w-full">
                    {/* MENU ITEMS */}
                    <div className="menu-items flex justify-evenly w-full gap-x-6">
                        <a className="menu-item" href="/">Trang chủ</a>
                        <a className="menu-item" href="/gioi-thieu">Giới thiệu bộ</a>
                        <a className="menu-item" href="/lanh-dao">Lãnh đạo Bộ</a>
                        <a className="menu-item" href="/tin-tuc">Tin tức Tài Chính</a>
                        <a className="menu-item" href="https://vbpq.mof.gov.vn">Hệ thống văn bản</a>
                        <a className="menu-item" href="https://portal.mof.gov.vn/hoidapcstc/">Hỏi đáp CSTC</a>
                    </div>

                    {/* SEARCH */}
                    {/*<div className="relative hidden md:block ml-6">*/}
                    {/*    <input*/}
                    {/*        ref={searchRef}*/}
                    {/*        type="search"*/}
                    {/*        placeholder="Tìm kiếm..."*/}
                    {/*        className="search-input"*/}
                    {/*    />*/}
                    {/*    <span className="search-icon" onClick={openSearchInput}>🔍</span>*/}
                    {/*</div>*/}

                </div>
            </nav>


        </header>
    );
}
