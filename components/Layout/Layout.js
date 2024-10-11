'use client'

import "./globals.css";
import SideMenuBar from "@/components/Menu/MenuSideBar";
import SideMenuBarRight from "@/components/Menu/MenuBarRight";

function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className="h-screen items-center justify-center">
        <div className="bg-black">
          <div class="flex">
            <SideMenuBar></SideMenuBar>
            <div className="w-3/5 border border-gray-600 h-auto  border-t-0">
              {children}
            </div>
            <SideMenuBarRight></SideMenuBarRight>
          </div>
        </div>
      </body>
    </html>
  );
}


export default RootLayout;