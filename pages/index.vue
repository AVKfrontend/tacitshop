<template>
	<main>
		<SwiperParallax />
		<!-- <IntroArea>
			<template #home>
				<h1 class="title">fashion is nothing</h1>
				<h2 class="title utp__title">but <span>mischief</span></h2>
				<NuxtLink to="/shop" class="btn">shop now</NuxtLink>
			</template>
		</IntroArea> -->
		<section id="offers">
			<div class="container">
				<ul class="conditions">
					<li class="conditions__item">
						<svg xmlns="http://www.w3.org/2000/svg" width="32.05" height="32.05" viewBox="-0.033 4.967 32.05 32.05">
							<path
								d="M27 16.006h-2C25 11.04 20.963 7 16 7a9.013 9.013 0 0 0-9 9.006H5A11.016 11.016 0 0 1 16 5a11.016 11.016 0 0 1 11 11.006ZM7 30H6a6.039 6.039 0 0 1-3.86-1.336C.91 27.658.117 26.154.011 24.402A6.702 6.702 0 0 1 0 24a6.038 6.038 0 0 1 1.336-3.861c1.082-1.323 2.74-2.14 4.664-2.14h1V30Zm19 0h-1V18h1c3.421 0 6 2.579 6 6a6.04 6.04 0 0 1-1.335 3.86C29.583 29.185 27.925 30 26 30Zm-9.061 4.009a3.003 3.003 0 0 0 3 3 3.003 3.003 0 0 0 3-3c0-1.655-1.346-3-3-3s-3 1.345-3 3ZM27 20.109v7.78a3.8 3.8 0 0 0 2.969-3.348A4.607 4.607 0 0 0 30 24a4.166 4.166 0 0 0-.537-2.094A3.774 3.774 0 0 0 27 20.11Zm-22 0a3.8 3.8 0 0 0-2.968 3.35 4.607 4.607 0 0 0-.032.54 4.166 4.166 0 0 0 .538 2.095A3.773 3.773 0 0 0 5 27.89v-7.78ZM27 33a1.198 1.198 0 0 0 .012 0c.478-.004.956-.294.987-.933A1.373 1.373 0 0 0 28 32h2c0 1.643-1.19 2.897-2.799 2.994a3.35 3.35 0 0 1-.2.006h-4v-2h4Zm-7.061.01a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1Z"
								fill="#48689a" fill-rule="evenodd" data-name="Headset" />
						</svg>
						<div class="conditions__info">
							<h3 class="conditions__title">24/7 Hour Support</h3>
							<p class="conditions__text">Our online support section is available and regularly updated if you'd prefer.
							</p>
						</div>
					</li>
					<li class="conditions__item">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 9 32 26">
							<path
								d="M32 29H22v-2h8v-6.763L27.382 15H24v6h4v2h-6V13h6.618L32 19.763V29Zm-12 0H0V9h20v20ZM2 27h16V11H2v16Zm14-4H4v-2h12v2Zm11 12c-2.206 0-4-1.794-4-4h2a2.003 2.003 0 0 0 2 2c1.102 0 2-.898 2-2h2c0 2.206-1.794 4-4 4ZM8 35c-2.206 0-4-1.794-4-4h2a2.003 2.003 0 0 0 2 2c1.103 0 2-.898 2-2h2a4.004 4.004 0 0 1-4 4Z"
								fill="#48689a" fill-rule="evenodd" data-name="Truck" />
						</svg>
						<div class="conditions__info">
							<h3 class="conditions__title">EASY SERVICE</h3>
							<p class="conditions__text">Our online support section is available and regularly updated if you'd prefer.
							</p>
						</div>
					</li>
					<li class="conditions__item">
						<svg xmlns="http://www.w3.org/2000/svg" width="31.483" height="31.483" viewBox="0 6 31.483 31.483">
							<path
								d="M27.732 37.462h-24v-13h2v11h20v-11h2v13ZM30 24.145 15.73 8.924 1.459 24.145 0 22.778 15.73 6l15.729 16.778L30 24.145Zm-10.27 9.317h-2v-7h-4v7h-2v-9h8v9Zm-3.998-11c-2.207 0-4-1.794-4-4a4.004 4.004 0 0 1 4-4 4.005 4.005 0 0 1 4 4 4.004 4.004 0 0 1-4 4Zm0-6c-1.103 0-2 .898-2 2 0 1.102.897 2 2 2a2.003 2.003 0 0 0 2-2 2.003 2.003 0 0 0-2-2Z"
								fill="#48689a" fill-rule="evenodd" data-name="House" />
						</svg>
						<div class="conditions__info">
							<h3 class="conditions__title">HOME DELIVERY</h3>
							<p class="conditions__text">Our online support section is available and regularly updated if you'd prefer.
							</p>
						</div>
					</li>
				</ul>
				<article class="block3">
					<ul class="block3__pictures">
						<li class="block3__img block3__img--polygon-out">
							<img src="/img/style_2_500_500.jpg" alt="">
						</li>
						<li class="block3__img block3__img--polygon-in">
							<img src="/img/style_1_500_500.jpg" alt="">
							<div class="block3__shade"></div>
							<NuxtLink to="/shop" class="btn block3__img-btn">shop now</NuxtLink>
						</li>
					</ul>
					<ul class="block3__pictures">
						<li class="block3__img">
							<img src="/img/style_3_500_500.jpg" alt="">
						</li>
						<li class="block3__img">
							<img src="/img/style_4_500_500.jpg" alt="">
							<em class="block3__em">New</em>
						</li>
					</ul>
					<div class="block3__link">
						<button class="block3__button" type="button">
							<div>
								<h3 class="block3__button-title">mens / Lifestyle</h3>
								<span class="block3__button-arrow"></span>
							</div>
						</button>
					</div>
				</article>
			</div>
		</section>
		<section id="collection">
			<ShowProducts :products-list="preferenceProductsList">
				<template v-slot:title>new collection</template>
			</ShowProducts>
		</section>
		<SliderHome />
		<section id="featured">
			<ShowProducts :products-list="featuredProductsList">
				<template v-slot:title>featured</template>
			</ShowProducts>
		</section>
	</main>
</template>

<script setup lang="ts">
import { Product } from 'utils/interfaces';


const amount: Ref<number> = ref(0)
const preferenceProductsList: Ref<Product[]> = ref([])
const featuredProductsList: Ref<Product[]> = ref([])

const user = useState('user', () => ({ id: -1 }))
// const cart: Ref<CartInit> = useStorage()
// console.log(user.value)

async function setPreferenceProductsList(amount: number): Promise<void> {
	preferenceProductsList.value = await getPreferenceProductsList(amount)
}
async function setFeaturedProductsList(amount: number): Promise<void> {
	featuredProductsList.value = await getFeaturedProductsList(amount)
}
async function setProductsLists(): Promise<void> {
	await setPreferenceProductsList(amount.value)
	setFeaturedProductsList(amount.value / 2)
}

watch(amount, () => setProductsLists)

onMounted(() => {
	amount.value = calculateAmount()
	setProductsLists()
	// 	setTimeout(setProductsLists, 0)
	window.addEventListener('resize', () => { amount.value = calculateAmount() })
})
onUnmounted(() => {
	window.removeEventListener('resize', () => { amount.value = calculateAmount() })
})


// setProductsLists()
// onMounted(() => setProductsLists())

// setTimeout(setProductsLists, 0)
// onMounted(() => setTimeout(setProductsLists, 0))

</script>