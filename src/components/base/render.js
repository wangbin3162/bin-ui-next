import { defineComponent, h } from 'vue';
export default defineComponent({
    name: 'RenderCell',
    functional: true,
    props: {
        render: Function,
    },
    setup(props) {
        return () => props.render(h);
    },
});
//# sourceMappingURL=render.js.map