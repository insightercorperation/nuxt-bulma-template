import { mount } from '@vue/test-utils'
import test from 'ava'
import SponsorSection from '../../components/SponsorSection.vue'

test('is a Vue instance', t => {
  const wrapper = mount(SponsorSection)
  console.log(wrapper)
  t.is(wrapper.isVueInstance(), true)
})

// test('List.vue shapshow', t => {
//   let images = ['img/logo/buefy.png']
//   const wrapper = mount(SponsorSection, {
//     propsData: { images }
//   })
//   console.log(wrapper.html())
//   t.snapshot({ html: wrapper.html() })
// })

// test('List.vue ddd', t => {
//   // let images = ['img/logo/buefy.png']
//   const wrapper = mount(SponsorSection)
//   const container = wrapper.find('.section')
//   console.log(container.value)
//   t.snapshot({ html: wrapper.html() })
// })
