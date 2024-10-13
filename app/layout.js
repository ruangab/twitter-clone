'use client'

import "./globals.css"; 
import SideMenuBar from "@/components/Menu/MenuSideBar";
import SideMenuBarRight from "@/components/Menu/MenuBarRight";
import { usePathname } from 'next/navigation';


export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Desativa o layout global para a página custompage
  if (pathname === '/login') {
    return <>
      <html>
        <body>
          {children}
        </body>
      </html>
    </>;
  }


  return (
    <html lang="pt-br">
      <body className="h-screen items-center justify-center">
        <div className="bg-black">
          <div className="flex">
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
