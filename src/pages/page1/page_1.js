import Tab1 from './page_block/page1_block1';
import Tab2 from './page_block/page1_block2';
import Tab3 from './page_block/page1_block3';
import Tab4 from './page_block/page1_block4';
import Tab5 from './page_block/page1_block5';
import Cart from './icons/cart';


function Page1() {
	return (
		<>

			<h1 class="title">
				<p>This is your</p>
				<p style={{ fontStyle: "italic" }}>personal program</p>
				<p>in the next month</p>
			</h1>

			<div class="list__dt">
				<p>
					It will help you to:
				</p>
			</div>
			<main class="block__info">
				<Tab1 />
				<Tab2 />
				<Tab3 />
				<Tab4 />
				<Tab5 />
			</main>
			<h2 class="title">
				<p>Quality of your</p>
				<p>well-being</p>
			</h2>



			<Cart />


			<div class="two_columns_text">
				<div>
					<p>
						Today
					</p>
				</div>
				<div>
					<p>
						In two month
					</p>
				</div>
			</div>

			<div class="btn_block">
				<button class="btn">
					Continue
				</button>
			</div>

		</>
	);
}

export default Page1;
