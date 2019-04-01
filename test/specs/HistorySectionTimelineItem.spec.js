import { mount } from '@vue/test-utils'
import test from 'ava'
import HistorySectionTimelineItem from '../../components/HistorySectionTimelineItem.vue'

test('is a Vue instance', t => {
  const wrapper = mount(HistorySectionTimelineItem)
  t.is(wrapper.isVueInstance(), true)
})

test('has a div element as a root', t => {
  const wrapper = mount(HistorySectionTimelineItem)
  t.is(wrapper.element.tagName, 'DIV')
})
