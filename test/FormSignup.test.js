import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import mockAxios from 'axios'
jest.mock("axios")

import FormSignup from '@/components/FormSignup.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('FormSignup', () => {
  beforeEach(() => {

  })

  test('has a signUp method', () => {
    expect(typeof FormSignup.methods.signUp).toBe('function')
  })

  test('sets the correct default data', () => {
    expect(typeof FormSignup.data).toBe('function')
    const defaultData = FormSignup.data()
    expect(defaultData.show).toBe(false)
  })

  test('signUp method returns nothing', async () => {
    expect(FormSignup.methods.signUp).toBeDefined()
    
    const data = undefined
    mockAxios.get.mockResolvedValue(data)
    
    const result = await FormSignup.methods.signUp()
    expect(result).toEqual(data)
  })
})