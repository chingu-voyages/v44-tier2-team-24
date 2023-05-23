import React from "react";
import styles from "./AboutUs.module.css"

export default function AboutUs() {
  return (
    <div className={styles.main}>
      <h1 className={styles.mainHeader}>About Us</h1>
      <section className={styles.section}>
       <div className={styles.imgContainer}><img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"/></div> 
        <div className={styles.content}>
          <h4>Name Here</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet sequi pariatur tempora accusantium, impedit culpa veniam velit cum voluptate error ducimus vero totam laborum temporibus, nisi aliquid, perspiciatis corporis?</p>
        </div>
      </section>
      <section className={styles.section}>
      <div className={styles.imgContainer}><img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>

      <div className={styles.content}>
          <h4>Name Here</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet sequi pariatur tempora accusantium, impedit culpa veniam velit cum voluptate error ducimus vero totam laborum temporibus, nisi aliquid, perspiciatis corporis?</p>
        </div>      </section>
      <section className={styles.section}>
      <div className={styles.imgContainer}><img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"/></div> 

      <div className={styles.content}>
        <h4>Name Here</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet sequi pariatur tempora accusantium, impedit culpa veniam velit cum voluptate error ducimus vero totam laborum temporibus, nisi aliquid, perspiciatis corporis?</p>
        </div>        </section>
      <section className={styles.section}>
      <div className={styles.imgContainer}><img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
      <div className={styles.content}>
          <h4>Name Here</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet sequi pariatur tempora accusantium, impedit culpa veniam velit cum voluptate error ducimus vero totam laborum temporibus, nisi aliquid, perspiciatis corporis?</p>
        </div>      
        </section>
    </div>
  );
}
