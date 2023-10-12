import React from "react";
import Image from "next/image";
import styles from "./sidebar.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ubaLogo from "@/src/assets/UBA-Logo.svg"
import SidebarItem from "./SidebarItem";

const Sidebar = ({ isSidebarOpen, step, onMenuItemClick, toggleSidebar, menuItems }) => {
    return (
        <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
            <div className={styles.fixed}>

                <div className={styles.logo}>
                    <Link href="/">
                        <Image src={ubaLogo} alt="Uba logo" width='160' height='95' />
                    </Link>
                </div>




                <ul className={`${styles.menu}`} onClick={toggleSidebar}>
                    {menuItems.map((item) => (
                        <React.Fragment key={item.stepNumber}>
                            <SidebarItem
                                key={item.stepNumber}
                                label={item.label}
                                itemIcon={item.itemIcon}
                                isActive={step === item.stepNumber}
                                doClick={() => onMenuItemClick(item.stepNumber, item.label)}
                                pageUrl={item.pageUrl}
                            />
                        </React.Fragment>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default Sidebar;

