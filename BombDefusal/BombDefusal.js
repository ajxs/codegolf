"use strict";
let defuse = (_wires_, _odd_, c=(a,x)=>a.filter(i=>i==x).length) => [,,,
	()=> !c(_wires_, 'R') ? 2 : _wires_[2] == 'W' ? 3 : c(_wires_, 'U') > 1 ? _wires_.lastIndexOf('U')+1 : 3,
	()=> c(_wires_, 'R') > 1 && _odd_ ? _wires_.lastIndexOf('R')+1 : _wires_[3] == 'Y' && !c(_wires_, 'R') ? 1 : c(_wires_, 'U') == 1 ? 1 : c(_wires_, 'Y') > 1 ? 4 : 2,
	()=> _wires_[4] == 'B' && _odd_ ? 4 : c(_wires_, 'R') == 1 && c(_wires_, 'Y') > 1 ? 1 : !c(_wires_, 'B') ? 2 : 1,
	() => !c(_wires_, 'Y') && _odd_ ? 3 : c(_wires_, 'Y') == 1 && c(_wires_, 'W') > 1 ? 4 : !c(_wires_, 'R') ? 6 : 4
][_wires_.length]();
