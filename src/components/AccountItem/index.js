import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/73442aacaddebd508af91bba57f10189~c5_100x100.jpeg?x-expires=1689670800&x-signature=9a2jQ9phseMx%2FB%2BbjUF9eoRXGzY%3D" alt="A"/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}>

                    </FontAwesomeIcon>
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;