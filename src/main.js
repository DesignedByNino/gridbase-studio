// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import Footer from "~/components/Footer.vue";
import '~/css/index.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),


    // Adding head meta data
    head.meta.push({
      name: 'keywords',
      content: 'HTML,CSS,XML,JavaScript',
    })


}
