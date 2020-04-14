import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import FormChangePassword from '@/components/FormChangePassword.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('FormChangePassword', () => {
  let vuetify

  beforeAll(() => {
    vuetify = new Vuetify()
  })

  test('has a change password method', () => {
    expect(typeof FormChangePassword.methods.changePassword).toBe('function')
  })

  test('sets the correct default data', () => {
    expect(typeof FormChangePassword.data).toBe('function')
    const defaultData = FormChangePassword.data()
    expect(defaultData.show1).toBe(false)
    expect(defaultData.show2).toBe(false)
    expect(defaultData.show3).toBe(false)
    expect(defaultData.error).toBe(false)
  })
})