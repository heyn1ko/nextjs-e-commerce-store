import styles from './page.module.scss';

export const metadata = {
  title: 'About Cleer',
  description: 'Curated Interior Finds',
};
export default function AboutPage() {
  return (
    <main>
      <div className={styles.about}>
        <h1>About Cleer</h1>
      </div>
    </main>
  );
}
