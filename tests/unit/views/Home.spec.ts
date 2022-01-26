import { Wrapper, shallowMount } from '@vue/test-utils'
import Vue from 'vue';
import Home from '@/views/Home.vue'
import Form from '@/components/Form.vue'

describe('Home - tests', () => {
    it('should display the message "hello world"', () => {
        const wrapper: Wrapper<Vue> = shallowMount(Home)

        expect(wrapper.find('#hello').text()).toBe('Hello World')
    });

    it('should if Form component is rendered', () => {
        const wrapper: Wrapper<Vue> = shallowMount(Home)

        expect(wrapper.findComponent(Form).exists()).toBeTruthy()
    })
});