export { default as Card } from '../../components/Card.vue'
export { default as Contact } from '../../components/Contact.vue'
export { default as ServCard } from '../../components/ServCard.vue'
export { default as Slide } from '../../components/Slide.vue'

export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/Card" */).then(c => c.default || c)
export const LazyContact = import('../../components/Contact.vue' /* webpackChunkName: "components/Contact" */).then(c => c.default || c)
export const LazyServCard = import('../../components/ServCard.vue' /* webpackChunkName: "components/ServCard" */).then(c => c.default || c)
export const LazySlide = import('../../components/Slide.vue' /* webpackChunkName: "components/Slide" */).then(c => c.default || c)
