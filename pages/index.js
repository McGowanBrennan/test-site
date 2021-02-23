import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Button.module.sass'
import Image from 'next/image'
import SideBar from "../components/sidebar.js";

export default function Home() {
  return (

    <div id = "App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
    
    <div className={styles.container}>
      

      <div className={styles.header}>
            
            <Image
        src="/will.jpg"
        height={500}
        width={800}
        alt="Picture of the author"
        layout='intrinsic'
      />
      </div>
    
      <div className={styles.photo}>
      
        <h1>Welcome to the site of Olympic Equestrian Will Coleman</h1>
        <p>Regarded as one of the top three-day event riders in America, Will has carefully produced and competed more than a dozen horses at the highest levels of eventing. He has been named annually to the USEF’s High Performance Training List since he was 18 years old. Will most recently represented his country at the 2018 World Equestrian Games in Tryon and the 2012 Olympic Games in London. </p>
        <p>A former NAYRC Gold medalist, Will is also the only American to have ever won the Bramham European Under-25 CCI4* Championships in the United Kingdom, a feat which he accomplished at 20 years of age. With several top finishes at the five-star level and multiple four-star wins on a variety of horses, Will has been successfully competing at the highest levels of eventing for close to 20 years. </p>
        <p>Will continues to pursue representing his country at major championships and competing at the major 5-star events around the world. Enjoy the website and a look behind the scenes of a top-international eventing program. </p>
       
      </div>

      <div className={styles.buttonRow}>
      <Image
        src="/logo1.png"
        height={252}
        width={449}
        alt="Picture of the author"
        layout='intrinsic'
      />

<Image
        src="/logo1.png"
        height={252}
        width={449}
        alt="Picture of the author"
        layout='intrinsic'
      />
</div>
<div className={styles.sponsors}>
<Image
        src="/logo2.png"
        height={101}
        width={180}
        alt="Picture of the author"
        layout='intrinsic'
      />

<Image
        src="/logo2.png"
        height={101}
        width={180}
        alt="Picture of the author"
        layout='intrinsic'
      />

<Image
        src="/logo2.png"
        height={101}
        width={180}
        alt="Picture of the author"
        layout='intrinsic'
      />
      </div>

      <div className={styles.footer}>
      
          <div className={styles.links}>
            <div className={styles.wrap}>
            <Image
            src="/fb.ico"
            height={32}
            width={32}
            alt="Picture of the author"
            layout='fixed'
          />
            </div>
         <div className={styles.wrap}>
          <Image
            src="/ig.ico"
            height={32}
            width={32}
            alt="Picture of the author"
            layout='fixed'
          />
          </div>
          <div className={styles.wrap}>
          <Image
            src="/gmail.ico"
            height={32}
            width={32}
            alt="Picture of the author"
            layout='fixed'
          />
          </div>

          

          </div>

          <div className = {styles.bottom}>
          <p>WEBSITE CREATED BY LEWCZAK & MCGOWAN CONSULTING</p>
          </div>
          
        
          </div>
      
    </div>
    </div>
  )
}
