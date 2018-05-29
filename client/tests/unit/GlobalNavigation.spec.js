import { shallowMount } from '@vue/test-utils'
import GlobalNavigation from '@/components/GlobalNavigation.vue'

describe('GlobalNavigation.vue', () => {
  it('will mount', () => {
    const wrapper = shallowMount(GlobalNavigation, {
      stubs: ['router-link'],
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
