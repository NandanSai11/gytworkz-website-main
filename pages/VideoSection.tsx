import styles from '../styles/Home.module.css'

const VideoSection = (props: any) => {
        // console.log("VideoURL", props.videos[0].fields.url);
        
  return (
    <div className={styles.videoSection}>
        {/* <h1>Video Section</h1> */}
        <iframe title="vimeo-player" src={props?.videos?.[0]?.fields?.url} width="100%" frameBorder="0" allowFullScreen></iframe>
        {/* <div className="vp-preview vp-preview-invisible" data-thumb="https://i.vimeocdn.com/video/1499337315-507644f7af6880b7c50470f31afe1817d35781c9676a6aef36f08af16bfe148a-d?mw=1800&amp;mh=1013&amp;q=70" data-thumb-width="1800"></div> */}
    </div>
  )
}

export default VideoSection