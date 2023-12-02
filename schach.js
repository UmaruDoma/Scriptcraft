
var dgrff, i;


var drone;
function speicher() {
dgrff = [11, 12, 11, 12, 11, 12];
};
function schach() {
drone = fwd(1);
speicher();
for (var count = 0; count < 6; count++) {
  for (i = 1; i <= 6; i++) {
    if (dgrff[(i - 1)] == 11) {
      drone.box(blocks.diamond,1,1,1);
    } else {
      drone.box(blocks.dirt,1,1,1);
    }
    drone.fwd(1);
  }
  drone.up(1);
  drone.turn(2);
  drone.fwd(1);
}
};
 exports.schach = schach;
