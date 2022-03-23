<template >

  <div class='font-passTwo'>
    <div class='header_hero bg-primary-100 rounded-bl-hero header-hero h-heroheight'>
      <appHeader class='py-2 md:px-10'/>
      <div class='text-center flex heroSec items-center justify-center my-20 flex-column px-6 text-white '>
        <div>
        <h3 class='text-3xl font-medium leading-snug lg:text-5xl'>A mordern publishing platform</h3>
        <h5 class='mt-3 text-gray-100 text-base lg:text-lg'>Grow your audience and build your online brand</h5>
        <div class='mt-7'>
        <appButton class='bg-white text-sm h-10 px-3 py-3 align-middle text-center inline-flex items-center text-red-500 rounded-3xl font-extrabold cursor-pointer mr-3 hover:text-white hover:bg-red-400' Buttontext='Start for Free'  />

        <appButton class='border h-10 text-sm px-3 py-3 align-middle text-center inline-flex items-center text-gray-100 rounded-3xl font-extrabold cursor-pointer mr-2 hover:bg-white hover:text-red-400' Buttontext='Learn More' />
        </div>  
        </div>
      </div>
    </div>
    
    <div class='testo md:mt-24 mt-24 md:mb-96'>
      <h3 class='text-gray-700 text-center text-2xl mb-9 md:text-3xl md:mt-20p font-medium'>Designed for the future</h3>

    <div class='flex justify-center md:justify-start md:mt-24'>
  
      <div class=' max-w-screen-lg px-7 md:px-20'>
        
      <div class='flex md:justify-between flex-col md:flex-row-reverse'>
        <div class='flex justify-center md:-mr-cd'>
        <img src="./assets/images/illustration-editor-mobile.svg" class='md:hidden md:max-w-none w-di statistics' alt="statistics">
        </div>
        
        <div class='text-center md:pr-20 md:px-0 md:text-left'>
        <div class='md:w-ac'>
          <h3 class='text-gray-700 text-2xl mt-10 mb-3 font-medium '>Introducing an extencible editor</h3>
          <div class='text-gray-500'>
          Blogr features an exceedingly intutive interface which lets you focus on one thing:creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds suchs as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
          </div>
        </div>
        <div class='md:w-ac'>
          <h3 class='text-gray-700 text-2xl mt-10 sm:mt-20 mb-3 font-medium'>IRobust content management</h3>
          <div class='text-gray-500'>
          Flexible content management enables users to easily move through posts. Inscrease the usability of your blog by adding customized categores, sections, format, or flow. With this functionality, you're in full control.
          </div>

        </div>
        </div>
      </div>
      </div>
    </div>
    </div>

    <div class='bg-infasblue infastructure rounded-bl-hero flex lg:-mt-80 xl:-mt-sc justify-center rounded-tr-hero mt-24 md:mt-2 md:mb-40 h-99 md:h-auto extensible-editor'>
      <div class='fle0x justif0y-center container'>
      <div class='md:flex md:justify-center'>
       
      <div class='md:flex md:justify-around md:items-center w-full'>
      <div class='flex justify-center items-center '>
      <img src="./assets/images/illustration-phones.svg" class="relativeo infasPhone w-om max-w-none -top-32 md:-top-0" alt='phone img'>
      </div>

      <div class='text-base text-center px-7 md:text-left md:w-ac text-gray-100 md:mb-28'>
         <h3 class='text-3xl '>Introducing an extencible editor</h3>
        <div> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survive.</div>
      </div>
       </div>
      </div>
      </div>

    </div>

    <div class='bg-for-lastsection mt-24 md:mt-24 md:mb-40'>
    <div class='flex justify-center md:justify-end md:mt-24'>
  
      <div class=' max-w-screen-lg px-7 md:px-20'>
    <div class='flex md:justify-between flex-col md:flex-row-reverse'>

        <div class='flex justify-center md:-mr-cd'>
        <img src="./assets/images/illustration-editor-mobile.svg" class='md:hidden md:max-w-none w-di statistics' alt="statistics">
        </div>

        <div class='text-center md:pr-0 md:px-0 md:text-left'>
        <div class='md:w-ac'>
           <h3 class='text-gray-700 text-2xl mt-10 mb-3 font-medium px-11 md:px-0 xl:mb-6'>Free, open, simple</h3>
        <div class='text-gray-500'>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.
        </div>
        </div>

        <div class='md:w-ac md:mt-11'>
          <h3 class='text-gray-700 text-2xl mt-10 md:mt-0 mb-3 font-medium xl:mb-6'>Powerful tooling</h3>
        <div class='text-gray-500'>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
        </div>
        </div>
        </div>
      </div>
      </div>
       
    </div>
    </div>

    <appfooter class='mt-28 md:mt-2 rounded-tr-hero'/>
</div>
</template>

<script>
  import appHeader from './components/appHeader.vue'
  import appButton from './components/appButton.vue'
  import appfooter from './components/appfooter.vue'

  export default {
    name:'App',
    components: {
      appHeader,
      appButton,
      appfooter
    },
    props: {
      Buttontext:String
    }
  };
</script>
