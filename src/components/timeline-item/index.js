import TimelineItem from '../timeline/timeline-item.vue'

TimelineItem.install = (app) => {
  app.component(TimelineItem.name, TimelineItem)
}

export default TimelineItem
