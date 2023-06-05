import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="main">
      <h1 className="mainHeader">About Us</h1>
      
      <section>
        {/* Jack's Info*/}
       <div className="imgContainer"><img src="/images/Jack.jpeg"/></div> 
        <div className="content">
          <h4>Run Qi (Jack) Li</h4>
          <p>
          Jack is a self-taught full-stack Developer. Ex-Fukuoka JET (CIR - ALT) turned Web Dev. After being fascinated by Japan, teaching himself Japanese, and working in Japan for the past decade, Jack found an new direction in Web Dev, so he's now teaching himself programming languages. 
          </p>
          <p><Link to='https://jack-codes.netlify.app/' target="_blank" className="important_Links">Portfolio Website</Link></p>
          <p><Link to='https://github.com/jackli921' target="_blank" className="important_Links">GitHub</Link></p>
        </div>
      </section>
      <section>
        {/* Libby's Info*/}
      <div className="imgContainer"><img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>

      <div className="content">
          <h4>Elizabeth Reeves</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet sequi pariatur tempora accusantium, impedit culpa veniam velit cum voluptate error ducimus vero totam laborum temporibus, nisi aliquid, perspiciatis corporis?</p>
        </div>      
      </section>
      <section>
        {/* Hector's Info*/}
      <div className="imgContainer"><img src="/images/Hector.jpeg"/></div> 

      <div className="content">
        <h4>Hector Garcia</h4>
        <p>Hector recently graduated with a BS in Computer Science at The University of Texas Rio Grande Valley. He enjoy learning new things related to software development and looking for new opportunities to enhance his skills. He is passionate about building responsive and user-friendly interfaces that help shape the evolving digital world. </p>
       
          <p><Link to='https://github.com/hectorgarcia07' target="_blank" className="important_Links">GitHub</Link></p>
        </div>        
        </section>
      <section>
        {/* Sucheta's Info*/}
      <div className="imgContainer"><img src="/images/Sucheta.jpg"/></div>
      <div className="content">
          <h4>Sucheta Mukherjee</h4>
          <p>Sucheta is an enthusiastic self-taught Frontend Developer with a strong passion for designing user-friendly, scalable, and easily maintainable websites. Having recently made the decision to transition her career into the technology field, she has been actively expanding her skill set, constantly evolving and staying up to date with the latest techniques in the industry.</p>
          <p><Link to='https://github.com/sucheta90' target="_blank" className="important_Links">GitHub</Link></p>
        </div>      
        </section>
    </div>
  );
}
