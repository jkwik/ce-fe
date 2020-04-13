import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import FormLogin from '@/components/FormLogin.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('FormLogin', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('has a login Submit method', () => {
    expect(typeof FormLogin.methods.loginSubmit).toBe('function')
  })

  test('sets the correct default data', () => {
    expect(typeof FormLogin.data).toBe('function')
    const defaultData = FormLogin.data()
    expect(defaultData.show).toBe(false)
  })
})