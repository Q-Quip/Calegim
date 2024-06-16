import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import SignUpHead from './SignUpHead'
import logoHead from '/public/img/header/logoHead.webp'
import ShopCartPreview from './ShopCartPreview';
import { CiSearch } from "react-icons/ci";
import { GiHeartBottle } from "react-icons/gi";
import { useSelector} from 'react-redux'
import { RootState } from '../../store/store';


const Header = () => {
    const [prevScroll, setPrevScroll] = useState(window.scrollY);
    const [show, setShow] = useState(true);
    const [openShop, setOpenShop] = useState(false);

    const productsCounter:number = useSelector((state:RootState) => state.productCounter.countProducts);
    

    const handleOpenBar = () => {
        setOpenShop(!openShop);
    }
    useEffect(() => {
        const handleScroll = () => {
          const currentScroll = window.scrollY;
          setShow(currentScroll <= prevScroll);
          setPrevScroll(currentScroll);
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScroll]);
    
    return( 
        <header className={show? styles.activeHead:styles.hiddenHead }>
            <SignUpHead/>
            <nav className={styles.navbar}>
                <ul className={styles.leftBar}>
                    <li>skincare</li>
                    <li>haircare</li>
                </ul>
                <ul className={styles.logo}>
                    <Link to="/">
                        <li>
                            <img src={logoHead} alt='logo calecim' title='main page logo'/>
                        </li>
                    </Link>
                </ul>
                <ul className={styles.rightBar}>
                    <li >about</li>
                    <li >learn</li>
                    <li className={styles.pro}> <p>pro site</p></li>
                    <li>
                        <a>
                            <CiSearch  style={{fontSize: '23px'}}/>
                        </a>
                    </li>
                    <li onClick={()=>{setOpenShop(true)}}>
                        <a>
                            <GiHeartBottle style={{fontSize: '23px'}}/>
                            <span className={styles.num}>
                                 {productsCounter}
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <ShopCartPreview openShop={openShop} handleOpenBar={handleOpenBar}/>
        </header>
    )
}

export default Header;