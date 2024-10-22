import Link from "next/link";
import search from "@/app/ass/search.svg";
import Image from "next/image";
// css import
import styles from "./header.module.css";

function Header() {
  // TODO: Implement search functionality

  // If you increase this json then the menu size automatically increases
  const menuJson = [
    {
      id: 1,
      title: "All Tasks",
      to: "/all-tasks",
    },
  ];

  return (
    <header className={styles.header}>
      {/* Logo  */}
      <div>
        <Link href="/">Logo</Link>
      </div>
      {/* all menu show here */}
      <div className={styles.menu}>
        {menuJson.map((e) => (
          <Link key={e.id} href={e.to}>
            {e.title}
          </Link>
        ))}
      </div>
      {/* searchbar */}
      <from className={styles.from}>
        <input type="text" placeholder="Search..." />
        <button>
          <Image src={search} width={10} alt="Search" />
        </button>
      </from>
    </header>
  );
}

export default Header;
