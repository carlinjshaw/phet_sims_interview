// Copyright 2022, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author me
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import merge from '../../../../phet-core/js/merge.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import SimConstants from '../../common/SimConstants.js';
import sim from '../../sim.js';
import SimModel from '../model/SimModel.js';

class SimScreenView extends ScreenView {

  /**
   * @param {SimModel} model
   * @param {Object} [options]
   */
  constructor( model, options ) {
    assert && assert( model instanceof SimModel, 'invalid model' );

    options = merge( {

      // phet-io options
      tandem: Tandem.REQUIRED
    }, options );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - SimConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - SimConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   * @public
   */
  reset() {
    //TODO
  }

  /**
   * Steps the view.
   * @param {number} dt - time step, in seconds
   * @public
   */
  step( dt ) {
    //TODO
  }
}

sim.register( 'SimScreenView', SimScreenView );
export default SimScreenView;