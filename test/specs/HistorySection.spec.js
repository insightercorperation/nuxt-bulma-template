import { mount } from '@vue/test-utils'
import test from 'ava'
import HistorySection from '../../components/HistorySection.vue'

test('is a Vue instance', t => {
  const wrapper = mount(HistorySection)
  t.is(wrapper.isVueInstance(), true)
})

test('has a div section as a root', t => {
  const wrapper = mount(HistorySection)
  t.is(wrapper.element.tagName, 'SECTION')
})

test('has a method', t => {
  const wrapper = mount(HistorySection)
  t.is(wrapper.vm.sample(), 'sample')
})

test('config title props', t => {
  const wrapper = mount(HistorySection, {
    propsData: {
      title: 'history'
    }
  })
  t.is(wrapper.vm.title, 'history')
})

test('config timelineItems props', t => {

  const items = [
    {
      from: new Date(2014, 11),
      title: 'sampleTitle'
    },
    {
      from: new Date(2015, 1),
      title: 'sampleTitle2'
    },
    {
      from: new Date(2015, 2),
      title: 'sampleTitle3'
    }
  ]

  const expected = [
    {
      year: 2014,
      events: [
        {
          strDate: '2014.12',
          title: 'sampleTitle'
        }
      ]
    },
    {
      year: 2015,
      events: [
        {
          strDate: '2015.2',
          title: 'sampleTitle2'
        },
        {
          strDate: '2015.3',
          title: 'sampleTitle3'
        }
      ]
    }
  ]
  const wrapper = mount(HistorySection, {
    propsData: {
      timelineItems: items
    }
  })
  t.deepEqual(wrapper.vm.yearItemData, expected)
})

