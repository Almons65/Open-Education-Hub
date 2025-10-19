
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Breadcrumb.module.css"; // Create your CSS module for breadcrumb

export default function Breadcrumb({ items }) {
  const router = useRouter();

  const handleClick = (href) => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span
            className={`${styles.breadcrumbItem} ${item.href ? styles.link : ''}`}
            onClick={() => item.href && handleClick(item.href)}
          >
            {item.label}
          </span>
          {index < items.length - 1 && (
            <span className={styles.breadcrumbSeparator}> &gt; </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}