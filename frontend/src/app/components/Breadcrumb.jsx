import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Breadcrumb.module.css"; 

// Define and export the Breadcrumb component, which accepts 'items' as a prop
export default function Breadcrumb({ items }) {
  // Initialize the router hook to get access to the router object
  const router = useRouter();

  // Define a function to handle clicks on breadcrumb items
  const handleClick = (href) => {
    // Check if the item has a valid 'href' (is not the last, non-clickable item)
    if (href) {
      // Use the router to push the new URL and navigate to that page
      router.push(href);
    }
  };

  // Render the breadcrumb navigation
  return (
    // Use the <nav> element for semantic HTML (it's a navigation block)
    // Apply the 'breadcrumb' class from our CSS module
    <nav className={styles.breadcrumb}>
      {/* Map over the 'items' array to create each breadcrumb link and separator */}
      {items.map((item, index) => (
        // Use React.Fragment to group elements without adding an extra node to the DOM
        // 'key' is required for each item in a list for React to track them
        <React.Fragment key={index}>
          {/* This <span> holds the breadcrumb item's text (label) */}
          <span
            // Apply the base 'breadcrumbItem' class
            // Conditionally add the 'link' class if 'item.href' exists
            className={`${styles.breadcrumbItem} ${item.href ? styles.link : ''}`}
            // Add an onClick handler
            // It only calls handleClick if 'item.href' exists
            onClick={() => item.href && handleClick(item.href)}
          >
            {/* Display the text label for the item */}
            {item.label}
          </span>
          {/* Conditionally render the separator */}
          {/* Only add a separator if this is NOT the last item in the array */}
          {index < items.length - 1 && (
            // This <span> holds the separator character (e.g., '>')
            <span className={styles.breadcrumbSeparator}> &gt; </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}