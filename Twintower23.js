var AnzahlStockwerke = 10;
var Breite = 100;
var DistAElev = 15;
var DistBElev = 27;
var BreiteAElev = 71;
var BreiteBElev = 47;
var HoeheStockwerk = 5;
var BreiteGangElev = 2;
var drone;
function BaueBodenplatte()
{
	drone = box( blocks.quartz , Breite, 1, Breite );	
}
function BaueStockwerkeUnten6()
{

	drone.turn(3);
	drone.back(1);
	for (j=0;j<4;j++)
	{
		for (i=0;i<Breite/3;i++)
		{
			drone.back(1);
			drone.box( blocks.iron , 1, 6*HoeheStockwerk, 1 );
			drone.back(1);
			drone.box( blocks.glass , 1, 6*HoeheStockwerk, 1 );
			drone.back(1);
			drone.box( blocks.glass , 1, 6*HoeheStockwerk, 1 );
		}
		drone.turn(3);
	}
}
function BaueZwischendecke()
{
	drone.box( blocks.quartz , Breite, 1, Breite );	
}
function BaueAufzug()
{
	drone.right(1);
	drone.box (blocks.air, (BreiteAElev - 2)/2, 1,(BreiteBElev - 2)/2);
	drone.left(1);
	drone.box0(blocks.quartz,(BreiteAElev - 2)/2, HoeheStockwerk,(BreiteBElev - 2)/2 );	
}
function BaueAufzugtrakt()
{
	drone.fwd(DistBElev);
	drone.right(DistAElev);
	BaueAufzug();
	drone.fwd((BreiteBElev - 2)/2 + 2);
	BaueAufzug();
	drone.right((BreiteAElev - 2)/2 +2);
	BaueAufzug();
	drone.back((BreiteBElev - 2)/2 + 2);
	BaueAufzug();
	drone.left((BreiteAElev - 2)/2 +2);
	drone.back(DistBElev);
	drone.left(DistAElev);
}
function BaueStockwerk()
{
	for (j=0;j<4;j++)
	{
		for (i=0;i<Breite/2;i++)
		{
			drone.back(1);
			drone.box( blocks.iron , 1, HoeheStockwerk, 1 );
			drone.back(1);
			drone.box( blocks.glass , 1, HoeheStockwerk, 1 );
		}
		drone.turn(3);		
	}
	drone.turn(1);
	BaueAufzugtrakt();
	drone.turn(3);
}
function BaueDach()
{
	drone.box( blocks.quartz , Breite, 1, Breite );	
}

function Twintower23()
{
	BaueBodenplatte();
	BaueStockwerkeUnten6();
	drone.up(6*HoeheStockwerk);
	for ( k = 0; k < 30;k++)
	{
		drone.turn(1);
		BaueZwischendecke();
		drone.turn(3);
		BaueStockwerk();
		drone.up(HoeheStockwerk);
	}
        drone.turn(1);
	BaueDach();
}
exports.Twintower23 = Twintower23;