import Loading from '../Loading/Loading'

import styles from './css/dataurl.module.css'

const Dataurl = ({ shortUrl, loading }) => {
  return (
    <>
      <section className={styles.container__data}>
        {loading && <Loading />}
        {shortUrl && (
          <div className={styles.container__dataurl}>
            <p>Tu url acortada: </p>
            <a href={shortUrl} target="_blank">
              {shortUrl}
            </a>
          </div>
        )}
      </section>
    </>
  );
};

export default Dataurl;
