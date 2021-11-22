import FontSizeIco from "./icons_footer/font_size"
import HTTPSonIco from "./icons_footer/httpsON"
import RenewICO from "./icons_footer/renew"
import UndoIco from "./icons_footer/undo"
import PrevIco from "./icons_footer/prev"
import ShareAndArrowIco from "./icons_footer/share_and_arrow"
import BookIco from "./icons_footer/book"
import WebTabIco from "./icons_footer/tab"
import HomeIndicatorIco from "./icons_footer/home_indicator"

function Footer() {
	return (
		<>
			<footer class="tab__bar">
				<div class="search__tab">
					<div class="search__tab__icon">
						<a href="/">
							<FontSizeIco />
						</a>
					</div>
					<div class="search__tab__text">
						<div class="search__tab__text__icon">
							<HTTPSonIco />
						</div>
						<div class="search__tab__text__text">
							<span>
								senses.com
							</span>
						</div>

					</div>
					<div class="search__tab__icon">
						<a href="/">
							<RenewICO />
						</a>
					</div>
				</div>
				<div>
					<div class="tab__bar__nav__icon__container">

						<div class="tab__bar__nav__icon">
							<a href="/" class="tab__bar__nav__link">
								<UndoIco />
							</a>
						</div>
						<div class="tab__bar__nav__icon">
							<a href="/" class="tab__bar__nav__link">
								<PrevIco />
							</a>
						</div>
						<div class="tab__bar__nav__icon">
							<a href="/" class="tab__bar__nav__link">
								<ShareAndArrowIco />
							</a>
						</div>
						<div class="tab__bar__nav__icon">
							<a href="/" class="tab__bar__nav__link">
								<BookIco />
							</a>
						</div>
						<div class="tab__bar__nav__icon">
							<a href="/" class="tab__bar__nav__link">
								<WebTabIco />
							</a>
						</div>
					</div>
					<div class="home__indicator">
						<HomeIndicatorIco />
					</div>
				</div>
			</footer>

		</>
	);
}

export default Footer;