import page from './documents/page'
import post from './documents/post'
import duration from './objects/duration'
import milestone from './objects/milestone'
import timeline from './objects/timeline'
import home from './singletons/home'
import settings from './singletons/settings'

export const schema = {
  types: [
    home,
    settings,
    duration,
    page,
    post,
    milestone,
    timeline,
  ],
}