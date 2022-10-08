
import { Link } from "react-router-dom";
import "./Header.scss";
import { DASHBOARD } from "../../routes/route-path";
import { FaTelegramPlane, FaBullhorn, FaTwitter, FaGithub } from 'react-icons/fa';
import { ConnectButton } from '@web3uikit/web3';

const Header = ({sidebar, setSidebar}) => {
	
  return (
		<div className="header-section d-flex align-items-center">
				<div className="header d-flex justify-content-between align-items-center m-auto">
					<div className="connect-wallet parallel-border">
							<ConnectButton />
					</div>
					<div className="mobile-menu-icon ms-3">
							<button onClick={()=>setSidebar(!sidebar)}>
								{
									sidebar?
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
									:
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
								}
								</button>
						</div>
					<div className="right d-flex align-items-center">
						<ul className="social-section d-inline-flex parallel-border">
							<li className="social-icon">
								<a href="https://twitter.com/OnePow1" target="_blank">
									<FaTwitter />
								</a>
							</li>
							<li className="social-icon">
								<a href="https://t.me/onepoww" target="_blank">
										<FaBullhorn />
								</a>
							</li>
						</ul>
						<div className="buy-on parallel-border">
							<p>OWT</p>
							<div className="dropdown-sec">
							<div className="dropdown">
								<a href="https://app.powswap.io/#/swap?outputCurrency=0xE8c2FdE624866BCd5E5330b321314187476BD442&chain=ethereum_pow" target="_blank">Buy on PowSwap</a>
							</div>
							</div>
							
						</div>
						<div className="left">
						<Link to={DASHBOARD}><div className="mb-0">OWT</div></Link>
					</div>
					</div>
				</div>
		</div>
	);
};

export default Header;
