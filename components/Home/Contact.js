import styles from "../../styles/Contact.module.css";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <header className={styles.header}>
          <h1>Contact</h1>
        </header>
        <div className={styles.card}>
          <div className={styles.email}>
            <h2>Vinod Kolekar</h2>
            <h2 className={styles.email_id}>vinodkolekar12345@gmail.com</h2>
            <h2>+91-8999153142</h2>
            <h2>Ahmadpur-Latur,Maharashtra,Bharat</h2>
          </div>
          <div className={styles.socialmedia}>
            <h2 className={styles.bold}>Social Media</h2>
            <div className={styles.socialmedia_id}>
              <Link href="https://www.linkedin.com/in/vinod-kolekar-5519a2250/">
                <Image
                  className={styles.img}
                  src="/icons/linkedIn.png"
                  width={70}
                  height={70}
                  alt="Vinod's linkedIn"
                />
              </Link>
              <Link href="https://github.com/vinodkolekar">
                <Image
                  className={styles.img}
                  src="/icons/gitHub.png"
                  width={70}
                  height={70}
                  alt="Vinod's github"
                />
              </Link>
              <Link href="tt">
                <Image
                  className={styles.img}
                  src="/icons/instaGram.png"
                  width={70}
                  height={70}
                  alt="Vinod's instaGram"
                />
              </Link>
              <Link href="https://youtu.be/yRolh8QirCA">
                <Image
                  className={styles.img}
                  src="/icons/youtube.png"
                  width={65}
                  height={10}
                  alt="Vinod's youtube"
                />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
