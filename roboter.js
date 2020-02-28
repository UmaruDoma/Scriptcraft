function roboter()
{
   var drone = box( blocks.wool.gray , 9, 12, 8);	
   drone.down(6);
   // beine
   drone.right(2);
   drone.fwd(3);
   drone.box( blocks.wool.gray , 2, 6, 2);
   drone.right(4);
   drone.box( blocks.wool.gray , 2, 6, 2);
   drone.up(6+4);
   //arme
   drone.right(3);
   drone.box( blocks.wool.gray , 2, 7, 2);
   drone.left(11);
   drone.box( blocks.wool.gray , 2, 7, 2);
   drone.up(5+4);
   drone.right(3);
   drone.back(2);
   // kopf
   drone.box( blocks.wool.gray ,7, 7, 6);
   drone.up(1);
   // augen
   drone.right(1);
   drone.box( blocks.wool.white ,5, 1, 1);
   drone.up(2);
   drone.box( blocks.wool.white ,2, 2, 1);
   drone.right(1);
   drone.box(blocks.wool.black);
   drone.right(2);
   drone.box( blocks.wool.white ,2, 2, 1);
   drone.right(1);
   drone.box(blocks.wool.black);
   drone.left(1);
   drone.up(4);
   drone.fwd(3);
   // antennen
   drone.box( blocks.wool.gray ,1, 4, 1);
   drone.up(4);
   drone.box(blocks.wool.red);
   drone.down(4);
   drone.left(2);
   drone.box( blocks.wool.gray ,1, 4, 1);
   drone.up(4);
   drone.box(blocks.wool.red);
 }
 exports.roboter = roboter;
