import SearchBar from '../search/search-bar';
import SongList from '../song-list/song-list';

import styles from './media-player.module.scss';
import Album from '../album/album';

const MediaPlayer = () => {
  return (
    <div className={styles.mediaPlayer}>
      <div className={styles.albumList}>
        <SearchBar />
        <SongList />
      </div>
      <div className={styles.songList}>
        <Album />
      </div>
    </div>
  );
};

export default MediaPlayer;
