import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import mockAxios from 'axios'
jest.mock("axios")

import FormLogin from '@/components/FormLogin.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use([Vuetify, Vuex])

describe('FormLogin', () => {
  beforeEach(() => {
   
  })

  test('has a login Submit method', () => {
    expect(typeof FormLogin.methods.loginSubmit).toBe('function')
  })

  test('sets the correct default data', () => {
    expect(typeof FormLogin.data).toBe('function')
    const defaultData = FormLogin.data()
    expect(defaultData.show).toBe(false)
  })

  test('loginSubmit method returns nothing', async () => {
    expect(FormLogin.methods.loginSubmit).toBeDefined()
    
    const data = undefined
    mockAxios.get.mockResolvedValue(data)
    
    const result = await FormLogin.methods.loginSubmit()
    expect(result).toEqual(data)
  })
})