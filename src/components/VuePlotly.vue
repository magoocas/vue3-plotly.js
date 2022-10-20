<template>
  <div ref="container" />
</template>

<script setup>
import { update } from 'lodash';
import { ref, onMounted } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  layout: {
    type: Object,
    required: true,
  },
  useResizeHandler: {
    type: Boolean,
    default: false,
  },
  debug: {
    type: Boolean,
    default: false,
  },
});

const container = ref(null)
const state = {
  isBrowser: typeof window !== 'undefined',
  promise: Promise.resolve(),
  unmounting: false,
  resizeHandler: null
}


onMounted(() => {
  state.unmounting = false
  // if (props.debug && state.isBrowser) {
  //   window.gd = container
  // }
  updatePlotly(true)
})

function updatePlotly(shouldInvokeResizeHandler) {
  state.promise = state.promise
    .then(() => {
      if (state.unmounting) return;
      if (!container.value) {
        throw new Error('container not mounted');
      }

      return Plotly.react(container.value, {
        data: props.data,
        layout: props.layout
      });
    })
    .then(() => {
      if (state.unmounting) return;
      syncWindowResize(shouldInvokeResizeHandler);
    })
    .catch((err) => {
      console.error(err);
    });
}

function syncWindowResize(invoke) {
  if (!state.isBrowser) return;

  if (props.useResizeHandler && !state.resizeHandler) {
    state.resizeHandler = () => Plotly.Plots.resize(container.value)
    window.addEventListener('resize', state.resizeHandler);
    if (invoke) state.resizeHandler();
  }
  else if (!props.useResizeHandler && state.resizeHandler) {
    window.removeEventListener('resize', state.resizeHandler);
    state.resizeHandler = null;
  }

}

</script>
