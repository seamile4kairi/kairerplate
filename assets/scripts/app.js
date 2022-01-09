/**
 * Common
 * ========================================================================== */

import {
  isPrd,
} from '/.config'
import {
  Application,
} from '@hotwired/stimulus'

const $app = Application.start()
if (!isPrd) window.$app = $app


/**
 * Components
 * ========================================================================== */

// ...
