import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import FormForgotPassword from '@/components/FormForgotPassword.vue'
import mockAxios from 'axios';

jest.mock("axios")

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('FormForgotPassword', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('has a login Submit method', () => {
    expect(typeof FormForgotPassword.methods.forgotPassword).toBe('function')
  })

  test('sets the correct default data', () => {
    expect(typeof FormForgotPassword.data).toBe('function')
    const defaultData = FormForgotPassword.data()

    expect(defaultData.email).toBe("")
    expect(defaultData.error).toBe(false)
    expect(defaultData.errorMessage).toBe("Failed to Submit Form")
  })

  test('forgot password method returns nothing', async () => {
    expect(FormForgotPassword.methods.forgotPassword).toBeDefined()
    
    const data = undefined
    mockAxios.get.mockResolvedValue(data)
    
    const result = await FormForgotPassword.methods.forgotPassword()
    expect(result).toEqual(data)
  })
})