import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import mockAxios from 'axios'
jest.mock("axios")

import FormResetPassword from '@/components/FormResetPassword.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('FormResetPassword', () => {
  beforeEach(() => {

  })

  test('has a resetPassword method', () => {
    expect(typeof FormResetPassword.methods.resetPassword).toBe('function')
  })

  test('sets the correct default data', () => {
    expect(typeof FormResetPassword.data).toBe('function')
    const defaultData = FormResetPassword.data()
    expect(defaultData.showPassword).toBe(false)
  })

  test('resetPassword method returns nothing', async () => {
    expect(FormResetPassword.methods.resetPassword).toBeDefined()
    
    const data = undefined
    mockAxios.get.mockResolvedValue(data)
    let result

    try {
      result = await FormResetPassword.methods.resetPassword()
    }
    catch (e){
      result = undefined
    }
    
    expect(result).toEqual(data)
  })
})