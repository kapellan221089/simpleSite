export { default as Card } from '../../components/Card.vue'
export { default as Slide } from '../../components/Slide.vue'

export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/Card" */).then(c => c.default || c)
export const LazySlide = import('../../components/Slide.vue' /* webpackChunkName: "components/Slide" */).then(c => c.default || c)
