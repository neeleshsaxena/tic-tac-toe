(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{1:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),r=a(3),l=a.n(r),i=a(4),c=a(5),u=a(7),o=a(6),h=a(8),m=(a(1),function(t){var e=t.value,a=t.onClick,s=t.x,r=t.y;return n.a.createElement("button",{className:"square",onClick:function(){return a(s,r)}},e)}),v=function(t){var e=t.squares,a=t.onClick,s=function(t,s,r){return n.a.createElement(m,{key:t,value:e[t],onClick:function(){return a(t,s,r)}})};return n.a.createElement("div",null,function(){for(var t=[],e=0,a=0;a<3;a++){for(var r=[],l=0;l<3;l++)r.push(s(e++,a,l));t.push(n.a.createElement("div",{key:a,className:"board-row"},r))}return t}())},f="its a DRAW! both players are good!",d="next player: X",p="next player: O",g={squares:Array(9).fill(null),currentStep:0,xIsNext:!0,rows:Array(3).fill(0),cols:Array(3).fill(0),diagonal:0,antiDiagonal:0,status:null,isWinner:null},b=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(u.a)(this,Object(o.a)(e).call(this,t))).reset=function(){a.setState(g)},a.calculateWinner=function(t,e){var s=a.state.xIsNext?"X":"O",n="X"===s?1:-1,r=a.state.rows.slice(),l=a.state.cols.slice();r[t]+=n,l[e]+=n;var i=a.state.diagonal,c=a.state.antiDiagonal;t===e&&(i+=n),e===r.length-t-1&&(c+=n);var u=r.length;return Math.abs(r[t])===u||Math.abs(l[e])===u||Math.abs(i)===u||Math.abs(c)===u?{winner:s}:{rows:r,cols:l,diagonal:i,antiDiagonal:c,player:s}},a.getStatus=function(t,e){return t+1===9?f:e?p:d},a.state=g,a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"makeAMove",value:function(t,e,a){if(!this.state.isWinner&&this.state.status!==f&&!this.state.squares[t]){var s=this.state.squares.slice(),n=this.calculateWinner(e,a),r=n.winner,l=n.rows,i=n.cols,c=n.diagonal,u=n.antiDiagonal,o=n.player;if(r)return s[t]=r,void this.setState({status:"PLAYER ".concat(r," WINS!"),squares:s,isWinner:!0});s[t]=o,this.setState({squares:s,xIsNext:!this.state.xIsNext,currentStep:this.state.currentStep+1,rows:l,cols:i,status:this.getStatus(this.state.currentStep,this.state.xIsNext),diagonal:c,antiDiagonal:u})}}},{key:"render",value:function(){var t=this,e=this.state.status;return null===e&&this.setState({status:d}),n.a.createElement("div",{className:"test"},n.a.createElement("p",{className:"game-title"},"tic tac toe"),n.a.createElement("div",{className:"game-board"},n.a.createElement(v,{squares:this.state.squares,onClick:function(e,a,s){return t.makeAMove(e,a,s)}})),n.a.createElement("div",null,n.a.createElement("div",{className:"stats-table"},n.a.createElement("div",{className:"stats-table-cell"},"total steps:"," ",this.state.currentStep),n.a.createElement("div",{className:"stats-table-cell"},e))),n.a.createElement("div",null,n.a.createElement("button",{onClick:this.reset,className:"game-restart"},"restart game!")))}}]),e}(n.a.Component);l.a.render(n.a.createElement(b,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.4bd9c6c5.chunk.js.map