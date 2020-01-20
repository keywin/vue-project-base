import Vue from 'vue'

import { COM_formateDate } from './common.js'

Vue.filter('COM_formateDate', (date, type = 1) =>  date ? COM_formateDate(type, date) : '' )