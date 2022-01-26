// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author me
 */

import Screen from '../../../joist/js/Screen.js';
import merge from '../../../phet-core/js/merge.js';
import Tandem from '../../../tandem/js/Tandem.js';
import simColors from '../common/SimColors.js';
import sim from '../sim.js';
import SimModel from './model/SimModel.js';
import SimScreenView from './view/SimScreenView.js';

class SimScreen extends Screen {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( {
      //TODO if you include homeScreenIcon or navigationBarIcon, use JOIST/ScreenIcon
      backgroundColorProperty: simColors.screenBackgroundColorProperty,

      // phet-io options
      tandem: Tandem.REQUIRED
    }, options );

    super(
      () => new SimModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new SimScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

sim.register( 'SimScreen', SimScreen );
export default SimScreen;