import NotchIco from "./icons_header/notch"
import LogoIco from "./icons_header/logo"
import ConnectIco from "./icons_header/connect"
import WiFiIco from "./icons_header/wi-fi"
import BatteryChargeIco from "./icons_header/battery_charge"
function Header() {
	return (
		<>
			<header class="head__phone">

				<div class="left__side">
					<div class="left__side__time" id="id_clock">9:41</div>
				</div>


				<div class="notch">
					<NotchIco />
				</div>


				<div class="right__side">
					<div class="icon__item">
						<ConnectIco />
					</div>
					<div class="icon__item">
						<WiFiIco />
					</div>
					<div class="icon__item">
						<BatteryChargeIco />
					</div>

				</div>
			</header>

			<div class="logo">
				<LogoIco />
			</div>
		</>
	);
}

export default Header;