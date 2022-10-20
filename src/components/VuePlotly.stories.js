import VuePlotly from './VuePlotly.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/VuePlotly',
  component: VuePlotly,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   data: {},
  //   layout: {},
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VuePlotly },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  template: '<vue-plotly v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      x: [1, 2, 4],
      y: [2, 6, 3],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'red' },
    },
    { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
  ],
  layout: { width: 320, height: 240, title: 'A Fancy Plot' },
};
