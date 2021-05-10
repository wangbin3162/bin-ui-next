import Step from '../steps/step.vue'

Step.install = (app) => {
  app.component(Step.name, Step)
}

export default Step
