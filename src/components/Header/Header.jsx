import styles from './Header.module.scss';
import Logo from '../../assets/Logo.svg';
import CartIcon from '../../assets/cart.svg';
import SearchIcon from '../../assets/magnifier.svg';
import themeIcon from '../../assets/themeMode.svg';

const Header = () => {
  return (
    <div className={styles.main}>
      <img src={Logo} className={styles.logo} alt='logo' />
      <ul className={styles.menu}>
        <li>男款</li>
        <li>女款</li>
        <li>最新消息</li>
        <li>客製商品</li>
        <li>聯絡我們</li>
      </ul>
      <div className={styles.actionButtons}>
        <img src={CartIcon} alt='cart' />
        <img src={SearchIcon} alt='search' />
        <img src={themeIcon} alt='theme' />
      </div>
    </div>
  );
};

export default Header;
