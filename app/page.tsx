import Form from "@/app/components/Form";
import styles from "@/app/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.area1}>
        <h1 className={styles.title}>Summarizations</h1>

        <Form />
      </section>

      <section className={styles.area2}>
        <div className={styles.summarization}>Resumo...</div>
        <div className={styles.transcription}>Transcrição</div>
      </section>
    </main>
  );
}
