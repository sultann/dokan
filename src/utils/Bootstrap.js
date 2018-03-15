import Vue from 'vue'
import Router from 'vue-router'
import Moment from 'moment'
import Notifications from 'vue-notification'
import ListTable from 'vue-wp-list-table';
import API_Helper from '@/utils/Api'

import ChartJS from 'vue-chartjs'

// core components
import Postbox from "admin/components/Postbox.vue"
import Loading from "admin/components/Loading.vue"
import Chart from "admin/components/Chart.vue"
import Modal from "admin/components/Modal.vue"

Vue.use(Notifications)

Vue.filter('currency', function (value) {
    return accounting.formatMoney(value, dokan.currency);
})

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

window.dokan_get_lib = function(lib) {
    return window.dokan.libs[lib];
}

window.dokan_add_route = function(component) {
    window.dokan.routeComponents[component.name] = component;
}

// setup global Dokan libraries
window.dokan.api               = new API_Helper();
window.dokan.libs['Vue']       = Vue;
window.dokan.libs['Router']    = Router;
window.dokan.libs['moment']    = Moment;

window.dokan.libs['ListTable'] = ListTable;
window.dokan.libs['Postbox']   = Postbox;
window.dokan.libs['Loading']   = Loading;
window.dokan.libs['ChartJS']   = ChartJS;
window.dokan.libs['Chart']     = Chart;
window.dokan.libs['Modal']     = Modal;