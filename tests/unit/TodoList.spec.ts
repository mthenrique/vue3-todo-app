import { mount } from '@vue/test-utils'
import TodoList from '../../src/components/TodoList.vue'

describe('TodoList', () => {
  it('should display header text', () => {
    const onlyOpen = true
    const wrapper = mount(TodoList, { props: { onlyOpen } })

    expect(wrapper).toEqual(true)
  })
})
