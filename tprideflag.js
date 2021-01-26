






var drone;
function beaconp()
{
	drone.box( blocks.diamond , 3, 1, 3 );
	drone.up(1);
	drone.fwd(1);
  drone.turn();
  drone.fwd(1);
  drone.box( blocks.beacon , 1, 1, 1 );
  drone.up(1);
  drone.box( blocks.stained_glass.pink , 1, 1, 1 );
}

function beaconb()
{
	drone.box( blocks.diamond , 3, 1, 3 );
	drone.up(1);
	drone.fwd(1);
  drone.turn();
  drone.fwd(1);
  drone.box( blocks.beacon , 1, 1, 1 );
  drone.up(1);
  drone.box( blocks.stained_glass.cyan , 1, 1, 1 );
}

function beaconw()
{
	drone.box( blocks.diamond , 3, 1, 3 );
	drone.up(1);
	drone.fwd(1);
  drone.turn();
  drone.fwd(1);
  drone.box( blocks.beacon , 1, 1, 1 );
  drone.up(1);
  drone.box( blocks.stained_glass.white , 1, 1, 1 );
}

function gonext (){
	drone.turn(2);
	drone.fwd(1);
	drone.turn(1);
	drone.down(2);
	drone.fwd(2);
	
}
function tprideflag()
{ 
	drone = box( blocks.air , 1, 1, 1 );
  
  beaconb();
  gonext();
  beaconp();
    gonext();
    beaconw();
      gonext();
      beaconp();
        gonext();
        beaconb();
        
}

  exports.tprideflag = tprideflag;