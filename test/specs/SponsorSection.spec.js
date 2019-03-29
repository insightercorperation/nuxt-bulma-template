import { mount } from '@vue/test-utils'
import test from 'ava'
import SponsorSection from '../../components/SponsorSection.vue'

test('is a Vue instance', t => {
  const wrapper = mount(SponsorSection)
  t.is(wrapper.isVueInstance(), true)
})
