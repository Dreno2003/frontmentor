<template>
	<div class="md:hidden">
		<!-- navigation menu for mobile view -->
		<div class='flex items-center text-white justify-between p-8 ' >
		<img src="../assets/images/logo.svg" alt="" class='text-white' width="81">
		<div class='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" @click="toogleNav" width="24" height="11"><g fill="#ffff" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg></div>
		</div>
		<div class='flex justify-center text-center text-gray-700'>
		<div v-show='toggle' class='bg-white rounded-md py-8  navigations absolute shadow-xl font-bold w-00'>
			<ol class='list-none '>
				<li class='mb-7'>
					<a href="">Product</a>
				</li>
				<li class='mb-7'>
					<!-- toggle = !toggle -->
					<a href="">Company</a>
				</li>
				<li class='mb-7'>
					<!-- <a href="">Connect</a> -->
				<Menu as='div'>
						<!-- drop down btn === active -->

					<MenuButton ><a class='text-gray-700 font-bold'>Connect</a></MenuButton>
					<MenuItems class='bg-gray-100 mx-6 mt-4 text-black '>
						<MenuItem as='div' ><a href='#' class='mb-3 block '>Contact</a></MenuItem>
						<MenuItem as='div'><a href='#' class='mb-3 block'> Newsletter</a></MenuItem>
						<MenuItem as='div'><a href='#' class='mb-3 block'> Linkedin</a></MenuItem>
					</MenuItems>
				</Menu>
				</li>
			</ol>
			<div class='flex flex-col justify-center items-center'>
				<appButton  Buttontext='login'/>
				<appButton class='mt-7 inline-flex items-center justify-center text-center rounded-3xl text-white  py-2  bg-red-400 w-4/12' Buttontext='Sign Up'/>
			</div>
		</div>
	</div>
	</div>
<!-- ===================================================================================== -->
	<div class="hidden md:block py-10">
		<!-- header for desktop view -->
		<div class="flex justify-between items-center px-20">
			<div class="flex items-center gap-14">
		<img src="../assets/images/logo.svg" alt="" class='text-black' width="81">

			<ol class="text-white flex gap-5">
				<li>
			<Menu as='div' >
					<MenuButton v-bind:disabled="hide" ><a class='text-white font-bold'>Product</a></MenuButton>
					<MenuItems class='bg-gray-100 mx-6 mt-4 text-black'>
						<MenuItem as='div' ><a href='#' class='mb-3 block text-black'>Contact</a></MenuItem>
						<MenuItem as='div'><a href='#' class='mb-3 block'> Newsletter</a></MenuItem>
						<MenuItem as='div'><a href='#' class='mb-3 block'> Linkedin</a></MenuItem>
					</MenuItems>
				</Menu>
				</li>
					<li>
			<Menu as='div'>
					<MenuButton v-bind:disabled="hide"><a class='text-white  font-bold'>Company</a></MenuButton>
					<MenuItems class='bg-gray-100 mx-6 mt-4'>
						<MenuItem as='div' ><a href='#' class='mb-3 block md:text-black'>Contact</a></MenuItem>
						<MenuItem as='div'><a href='#' class='mb-3 block'> Newsletter</a></MenuItem>
						<MenuItem as='div'><a href='#' class='mb-3 block'> Linkedin</a></MenuItem>
					</MenuItems>
				</Menu>
				</li>
					<li>
						<!-- drop down btn === active -->
			<Menu as='div' class='md:absolute'>
				<MenuButton v-bind:disabled="toggle"  class='flex justify-center items-center' @click='toogleArrow(); toogleCloseArrow();'><a class='text-white font-bold' >Connect</a><div v-show='arrow'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>

</div>
<!-- ===== -->
	<div class='' v-show='closeArrow'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
</svg>
</div>

			</MenuButton>

					<MenuItems class='bg-gray-100 mx-6 mt-4 text-black md:shadow-2xl md:w-36 md:py-4 md:rounded'>
						<MenuItem as='div' ><a href='#' class='mb-3 block text-gray-700 pl-4 hover:bg-gray-200 hover:text-black'>Contact</a></MenuItem>
						<MenuItem as='div'><a href='#' class='mb-3 pl-4 text-gray-700 hover:bg-gray-200  block hover:text-black'> Newsletter</a></MenuItem>
						<MenuItem as='div'><a href='#' class=' block text-gray-700 pl-4 hover:bg-gray-200 hover:text-black'> Linkedin</a></MenuItem>
					</MenuItems>
				</Menu>
				</li>

		</ol>
		</div>

		<div class="flex gap-6">
			<button class="text-white cursor-pointer">Login</button>
			<button class="text-primary-100 bg-white py-2 rounded-3xl w-auto px-5 cursor-pointer hover:bg-red-400 hover:text-white">Sign Up</button>
		</div>
		</div>
	</div>
</template>

<script>
	import appButton from './appButton'
	import {Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

	export default{
		name:'appHeader',
		data() {
			return {
				toggle:false,
				arrow:true,
				hide: true,
				closeArrow:false
			}
		},
		components: {
			appButton,
			Menu,
			MenuButton,
			MenuItems,
			MenuItem
		},
		methods: {
			toogleNav() {
				this.toggle = !this.toggle
			},
			toogleArrow() {
				this.arrow = !this.arrow
			},
			toogleCloseArrow(){
				this.closeArrow = !this.closeArrow
			}
		}
	
	}
</script>
