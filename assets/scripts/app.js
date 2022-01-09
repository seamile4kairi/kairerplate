/**
 * Common
 * ========================================================================== */

import {
  Application,
} from '@hotwired/stimulus'

const $app = Application.start()
if (process.env.NODE_ENV !== 'production') window.$app = $app


/**
 * Components
 * ========================================================================== */

// ...
