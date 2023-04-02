import UiVideo from '@UI/UiVideo';
import video from './video/han-solo.mp4';

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                The dark side of the force has won.<br/>
                We can not display data.<br/>
                Come back when we fix everything
            </p>

            <UiVideo src={video} classes={styles.video} />
        </>
    )
}

export default ErrorMessage;