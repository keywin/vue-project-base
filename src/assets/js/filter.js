import Vue from 'vue'

import { formateDate } from './common.js'

Vue.filter('formateDate', (date, type = 1) =>  date ? formateDate(type, date) : '' )